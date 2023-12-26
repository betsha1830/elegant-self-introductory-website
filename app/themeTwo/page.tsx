"use client"

// Import image assets

import homePageImageSm from "@/public/homePage-sm.png"
import educationImageSm from "@/public/educationPage-sm.png"
import experienceImageSm from "@/public/experiencePage-sm.png"
import contactImageSm from "@/public/contactPage-sm.png"
import downArrow from "@/public/downArrow.svg"

//  Import components

import ImageContainerTwo from "../components/ImageContainerTwo"
import TextContainerTwo from "../components/TextContainerTwo"

//  Import built-in hooks

import { KeyboardEvent, WheelEvent, useEffect, useState } from "react"
import Image from "next/image"

//  Import motion library

import { motion, spring } from "framer-motion"

//  Import fonts
import { Whisper } from "next/font/google"
import ContactContainerTwo from "../components/ContactContainerTwo"

const whisper = Whisper({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
})

export default function ThemeTwo() {
  const [y, setY] = useState<number>(0)
  const [currPage, setCurrPage] = useState<number>(1)

  //  Navigation using the scroll wheel

  function scroll(e: WheelEvent) {
    if (e.deltaY > 50) {
      setTimeout(() => {
        nextPage(currPage + 1)
      }, 300)
    } else if (e.deltaY < -50) {
      setTimeout(() => {
        previousPage(currPage - 1)
      }, 300)
    }
  }

  //  Navigation using the arrow keys

  function navigate(e: KeyboardEvent) {
    if (e.key === "ArrowDown") {
      setTimeout(() => {
        nextPage(currPage + 1)
      }, 300)
    } else if (e.key === "ArrowUp") {
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
    <div onWheel={scroll}>
      <button
        id="focus"
        className="absolute hover:cursor-default top-0 left-0 z-100 w-screen h-screen"
        onKeyDown={navigate}
      />
      <div className="theme-two bg-wood w-screen h-screen overflow-hidden">
        <div
          className={
            "absolute right-6 z-10 top-10 text-4xl text-white -rotate-45 " +
            whisper.className
          }
        >
          Fraol Z.
        </div>
        <div className="flex flex-col ">
          <div className="absolute z-10 h-screen px-5 mr-2 flex flex-col justify-center gap-5">
            <button
              id="button-1"
              onClick={() => nextPage(1)}
              className="selector w-4 h-4 rounded-xl bg-slate-300 shadow-xl shadow-black"
            ></button>
            <button
              id="button-2"
              onClick={() => nextPage(2)}
              className="selector w-4 h-4 rounded-xl bg-white shadow-xl shadow-black"
            ></button>
            <button
              id="button-3"
              onClick={() => nextPage(3)}
              className="selector w-4 h-4 rounded-xl bg-white shadow-xl shadow-black"
            ></button>
            <button
              id="button-4"
              onClick={() => nextPage(4)}
              className="selector w-4 h-4 rounded-xl bg-white shadow-xl shadow-black"
            ></button>
          </div>
          <motion.div
            className=""
            animate={{ y: `${y}vh` }}
            transition={{ type: "spring", stiffness: 30 }}
          >
            <div className="content-1 flex">
              <div className="image w-1/2 justify-center">
                <ImageContainerTwo
                  img_src={homePageImageSm}
                  img_alt="woman smiling"
                />
              </div>
              <div className="descr w-1/2">
                <TextContainerTwo
                  desc="I am Dr. Fraol Zeleke, a neurology trailblazer. My groundbreaking diagnostic tool,
                    patient-centric care, and commitment to mentorship define my legacy,
                    recognized through accolades and a lasting impact on healthcare."
                  heading="Fraol Zeleke"
                />
              </div>
            </div>

            <div className="content-2 flex">
              <div className="image w-1/2 justify-center">
                <ImageContainerTwo
                  img_src={educationImageSm}
                  img_alt="Woman writing on a piece of paper"
                />
              </div>
              <div className="descr w-1/2">
                <TextContainerTwo
                  desc="Dr. Fraol Zeleke excelled at the esteemed Aetherius Medical Academy, earning a Bachelor's in Neuroscience and later achieving a Master's and Ph.D. in Neurology. This imaginary institution shaped his commitment to patient-centric care and mentorship, laying the groundwork for his groundbreaking contributions to the field."
                  heading="Education"
                />
              </div>
            </div>
            <div className="content-3 flex">
              <div className="image w-1/2 justify-center">
                <ImageContainerTwo
                  img_src={experienceImageSm}
                  img_alt="Woman diagnosing a patient"
                />
              </div>
              <div className="descr w-1/2">
                <TextContainerTwo
                  desc="With a distinguished career, Dr. Fraol Zeleke has pioneered advancements in neurology. His research led to a groundbreaking diagnostic tool for neurological disorders. Beyond his achievements, his empathetic patient care and mentorship have inspired future healthcare professionals. Recognized with awards, Dr. Zeleke continues to shape the landscape of medical science.."
                  heading="Experience"
                />
              </div>
            </div>
            <div className="content-4 flex">
              <div className="image w-1/2 justify-center">
                <ImageContainerTwo
                  img_src={contactImageSm}
                  img_alt="Woman talking on phone"
                />
              </div>
              <div className="descr w-1/2">
                <ContactContainerTwo
                  desc="Let’s get in touch. You can find me through on one of the listed contact information."
                  heading="Fraol Zeleke"
                  phone={"251912345678"}
                  email="contact@fraol.me"
                />
              </div>
            </div>
          </motion.div>
        </div>
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
      </div>
    </div>
  )
}
