"use client"

import ImageContainerTwo from "@/app/components/ImageContainerTwo"
import TextContainer from "@/app/components/TextContainer"
import ContactContainer from "@/app/components/ContactContainer"

// Import image assets

import homePageImageLg from "@/public/homePage-lg.png"
import educationImageLg from "@/public/educationPage-lg.png"
import experienceImageLg from "@/public/experiencePage-lg.png"
import contactImageLg from "@/public/contactPage-lg.png"
import homePageImageMd from "@/public/homePage-md.png"
import educationImageMd from "@/public/educationPage-md.png"
import experienceImageMd from "@/public/experiencePage-md.png"
import contactImageMd from "@/public/contactPage-md.png"

// Import icon assets

import downArrow from "@/public/downArrow.svg"

import { motion, spring } from "framer-motion"
import { KeyboardEvent, WheelEvent, useEffect, useState } from "react"
import Image from "next/image"

export default function ThemeTwo() {
  const [y, setY] = useState<number>(0)
  const [screenWidth, setScreenWidth] = useState<number>(768)
  const [currPage, setCurrPage] = useState<number>(1)

  //  Checks screen size and sets the appropriate image

  useEffect(() => {
    //  Calculate the browser height to use proper image

    if (typeof window !== undefined) {
      const width = window.innerWidth
      setScreenWidth(width)
      console.log(width)
      document.getElementById("focus")?.focus()
    }
  }, [])

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

  //  Goes to the next page of the website

  function nextPage(n: number) {
    // y <= -300 ? setY(0) : setY(y - 100)
    if (n !== currPage && n < 5) {
      document.getElementById(`button-${n}`)?.classList.remove("bg-white")
      document.getElementById(`button-${n}`)?.classList.add("bg-wood")
      document.getElementById(`button-${currPage}`)?.classList.remove("bg-wood")
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
      document.getElementById(`button-${n}`)?.classList.add("bg-wood")
      document.getElementById(`button-${currPage}`)?.classList.remove("bg-wood")
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
        className="absolute hover:cursor-default top-0 left-0 z-100 w-screen h-screen bg-white"
        onKeyDown={navigate}
      />
      <div className="w-screen h-screen flex flex-col overflow-hidden">
        <div className="absolute z-10 h-screen pl-5 flex flex-col justify-center gap-5">
          <button
            id="button-1"
            onClick={() => nextPage(1)}
            className="selector w-4 h-4 rounded-xl bg-wood shadow-xl shadow-black"
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
          className="z-0"
          animate={{ y: `${y}vh` }}
          transition={{ type: "spring", stiffness: 30 }}
        >
          <div id="content-1" className="flex">
            <ImageContainerTwo
              img_src={screenWidth < 1367 ? homePageImageMd : homePageImageLg}
              img_alt={"Woman slightly smiling and looking at camera"}
            />
            <TextContainer
              heading="Fraol Zeleke"
              desc="I am Dr. Fraol Zeleke, a neurology trailblazer. My groundbreaking diagnostic tool,
        patient-centric care, and commitment to mentorship define my legacy,
        recognized through accolades and a lasting impact on healthcare."
              signature="Fraol Z."
            />
          </div>
          <div id="content-2" className="flex">
            <ImageContainerTwo
              img_src={screenWidth < 1367 ? educationImageMd : educationImageLg}
              img_alt={"Woman writing on a piece of paper"}
            />
            <TextContainer
              heading="Education"
              desc="Dr. Fraol Zeleke excelled at the esteemed Aetherius Medical Academy, earning a Bachelor's in Neuroscience and later achieving a Master's and Ph.D. in Neurology. This imaginary institution shaped his commitment to patient-centric care and mentorship, laying the groundwork for his groundbreaking contributions to the field."
              signature="Fraol Z."
            />
          </div>
          <div id="content-3" className="flex">
            <ImageContainerTwo
              img_src={
                screenWidth < 1367 ? experienceImageMd : experienceImageLg
              }
              img_alt={"Woman writing on a piece of paper"}
            />
            <TextContainer
              heading="Experience"
              desc="With a distinguished career, Dr. Fraol Zeleke has pioneered advancements in neurology. His research led to a groundbreaking diagnostic tool for neurological disorders. Beyond his achievements, his empathetic patient care and mentorship have inspired future healthcare professionals. Recognized with awards, Dr. Zeleke continues to shape the landscape of medical science."
              signature="Fraol Z."
            />
          </div>
          <div id="content-4" className="flex">
            <ImageContainerTwo
              img_src={screenWidth < 1367 ? contactImageMd : contactImageLg}
              img_alt={"Woman writing on a piece of paper"}
            />
            <ContactContainer
              heading="Contact"
              desc="Let’s get in touch. You can find me through on one of the listed contact information."
              phone={"251912345678"}
              email="contact@fraol.me"
              signature="Fraol Z."
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
      </div>
    </div>
  )
}
