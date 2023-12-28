"use client"
//  Import image assets

import themeOne from "@/public/themeOne.png"
import themeTwo from "@/public/themeTwo.png"
import homePageImageMob from "@/public/homePage-mob.png"
import educationImageMob from "@/public/educationPage-mob.png"
import experienceImageMob from "@/public/experiencePage-mob.png"
import contactImageMob from "@/public/contactPage-mob.png"
import downArrow from "@/public/downArrow.svg"

//  Import built-in components

import Link from "next/link"
import Image from "next/image"
import { TouchEvent, useEffect, useState } from "react"

//  Import custom components

import { motion, spring } from "framer-motion"

//  Import fonts

import { Crimson_Text } from "next/font/google"
import MobileContent from "./components/MobileContent"

const crimson_text = Crimson_Text({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
})

export default function Page() {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [y, setY] = useState<number>(0)
  const [currPage, setCurrPage] = useState<number>(1)
  const [initTouch, setInitTouch] = useState<number>(0)

  useEffect(() => {
    const width = window.innerWidth
    width < 701 ? setIsMobile(true) : setIsMobile(false)
  }, [])

  //  Navigation using the arrow keys

  function navigate(e: TouchEvent) {
    const deltaTouch = e.touches[0].clientY - initTouch
    if (deltaTouch < 10) {
      setTimeout(() => {
        nextPage(currPage + 1)
      }, 300)
    } else if (deltaTouch > 10) {
      setTimeout(() => {
        previousPage(currPage - 1)
      }, 300)
    }
  }

  function nextPage(n: number) {
    // y <= -300 ? setY(0) : setY(y - 100)
    if (n !== currPage && n < 5) {
      document.getElementById(`button-${n}`)?.classList.remove("bg-white")
      document.getElementById(`button-${n}`)?.classList.add("bg-slate-300")
      document
        .getElementById(`button-${currPage}`)
        ?.classList.remove("bg-slate-300")
      document.getElementById(`button-${currPage}`)?.classList.add("bg-white")
      setCurrPage(n)
      if (n === 1) {
        setY(0)
      }
      if (n === 2) {
        setY(-100)
      }
      if (n === 3) {
        setY(-200)
      }
      if (n === 4) {
        setY(-300)
      }
    }
  }

  //  Goes to the previous page of the website

  function previousPage(n: number) {
    if (n !== currPage && n > 0) {
      document.getElementById(`button-${n}`)?.classList.remove("bg-white")
      document.getElementById(`button-${n}`)?.classList.add("bg-slate-300")
      document
        .getElementById(`button-${currPage}`)
        ?.classList.remove("bg-slate-300")
      document.getElementById(`button-${currPage}`)?.classList.add("bg-white")
      setCurrPage(n)
    }
    if (n === 1) {
      setY(0)
    }
    if (n === 2) {
      setY(-100)
    }
    if (n === 3) {
      setY(-200)
    }
    if (n === 4) {
      setY(-300)
    }
  }

  return (
    <div>
      {isMobile ? (
        <div
          onTouchStart={(e) => {
            setInitTouch(e.touches[0].clientY)
          }}
          onTouchMove={navigate}
          onTouchEnd={() => {
            setInitTouch(0)
          }}
          className="mobile w-screen h-screen overflow-hidden flex flex-col"
        >
          <motion.div
            animate={{ y: `${y}vh` }}
            transition={{ type: "spring", stiffness: 30 }}
          >
            <div className="content-1">
              <MobileContent
                img_src={homePageImageMob}
                img_alt="woman smiling"
                desc="I am Dr. Fraol Zeleke, a neurology trailblazer. My groundbreaking diagnostic tool,
                    patient-centric care, and commitment to mentorship define my legacy,
                    recognized through accolades and a lasting impact on healthcare."
                header="Fraol Zeleke"
              />
            </div>
            <div className="content-2">
              <MobileContent
                img_src={educationImageMob}
                img_alt="Woman writing on a piece of paper"
                desc="Dr. Fraol Zeleke excelled at the esteemed Aetherius Medical Academy, earning a Bachelor's in Neuroscience and later achieving a Master's and Ph.D. in Neurology. This imaginary institution shaped his commitment to patient-centric care and mentorship, laying the groundwork for his groundbreaking contributions to the field."
                header="Education"
              />
            </div>
            <div className="content-3">
              <MobileContent
                img_src={experienceImageMob}
                img_alt="Woman diagnosing a patient"
                desc="With a distinguished career, Dr. Fraol Zeleke has pioneered advancements in neurology. His research led to a groundbreaking diagnostic tool for neurological disorders. Beyond his achievements, his empathetic patient care and mentorship have inspired future healthcare professionals. Recognized with awards, Dr. Zeleke continues to shape the landscape of medical science."
                header="Experience"
              />
            </div>
            <div className="content-4">
              <MobileContent
                img_src={contactImageMob}
                img_alt="Woman talking on phone"
                desc="Let’s get in touch. You can find me through on one of the listed contact information."
                header="Contact"
              />
            </div>
          </motion.div>
          <div className="absolute bottom-0 flex justify-center w-screen">
            <motion.button
              onClick={() => nextPage(currPage + 1)}
              initial={{ y: -8 }}
              animate={{ y: -25 }}
              exit={{ y: -8 }}
              whileHover={{}}
              transition={{
                type: spring,
                repeatType: "reverse",
                repeat: Infinity,
                duration: 1,
              }}
              className="w-12 h-12 rounded-[50%] bg-gray-100 text-wood"
            >
              <Image src={downArrow} alt="down arrow" />
            </motion.button>
          </div>
          {/* <div className="content-1">
            <MobileImageContainer
              img_src={homePageImageMob}
              img_alt="woman smiling"
            />
            <MobileTextContainer
              header="Fraol Zeleke"
              desc="I am Dr. Fraol Zeleke, a neurology trailblazer. My groundbreaking diagnostic tool,
                    patient-centric care, and commitment to mentorship define my legacy,
                    recognized through accolades and a lasting impact on healthcare."
            />
          </div>
          <div className="content-2">
            <MobileImageContainer
              img_src={educationImageMob}
              img_alt="Woman writing on a piece of paper"
            />
            <MobileTextContainer
              header="Education"
              desc="Dr. Fraol Zeleke excelled at the esteemed Aetherius Medical Academy, earning a Bachelor's in Neuroscience and later achieving a Master's and Ph.D. in Neurology. This imaginary institution shaped his commitment to patient-centric care and mentorship, laying the groundwork for his groundbreaking contributions to the field."
            />
          </div>
          <div className="content-3">
            <MobileImageContainer
              img_src={experienceImageMob}
              img_alt="Woman diagnosing a patient"
            />
            <MobileTextContainer
              header="Experience"
              desc="With a distinguished career, Dr. Fraol Zeleke has pioneered advancements in neurology. His research led to a groundbreaking diagnostic tool for neurological disorders. Beyond his achievements, his empathetic patient care and mentorship have inspired future healthcare professionals. Recognized with awards, Dr. Zeleke continues to shape the landscape of medical science."
            />
          </div>
          <div className="content-4">
            <MobileImageContainer
              img_src={contactImageMob}
              img_alt="Woman talking on phone"
            />
            <MobileTextContainer
              header="Contact"
              desc="Let’s get in touch. You can find me through on one of the listed contact information."
            />
          </div> */}
        </div>
      ) : (
        <div className="page flex flex-col pt-24 items-center w-screen h-screen">
          <div className={"text-8xl " + crimson_text.className}>
            Choose a Theme
          </div>
          <div className="flex gap-10 h-full items-center">
            <Link href={"/themeOne"}>
              <Image className="w-[38em] bg-wood" src={themeOne} alt="" />
            </Link>
            <Link href={"/themeTwo"}>
              <Image className="w-[38em] bg-wood" src={themeTwo} alt="" />
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
