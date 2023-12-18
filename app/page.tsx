"use client"

import ImageContainer from "./components/ImageContainer"

// Import image assets

import homepageImageLg from "@/public/homePage-lg.png"
import educationImageLg from "@/public/educationPage-lg.png"
import experienceImageLg from "@/public/experiencePage-lg.png"
import contactImageLg from "@/public/conatctPage-lg.png"
import homepageImageMd from "@/public/homePage-md.png"
import educationImageMd from "@/public/educationPage-md.png"
import experienceImageMd from "@/public/experiencePage-md.png"
import contactImageMd from "@/public/contactPage-md.png"

import TextContainer from "@/app/components/TextContainer"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Home() {
  const [y, setY] = useState<number>(0)
  const [screenHeight, setScreenHeight] = useState<number>(768)
  const [currPage, setCurrPage] = useState(1)

  let page_counter = 1

  useEffect(() => {
    typeof window !== undefined ? setScreenHeight(window.innerHeight) : ""
  }, [])

  function nextPage(n: number) {
    // y <= -300 ? setY(0) : setY(y - 100)
    if (n !== currPage) {
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
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <div className="absolute z-10 h-screen pl-5 flex flex-col justify-center gap-5">
        <button
          id="button-1"
          onClick={() => nextPage(1)}
          className="selector w-4 h-4 rounded-xl bg-wood"
        ></button>
        <button
          id="button-2"
          onClick={() => nextPage(2)}
          className="selector w-4 h-4 rounded-xl bg-white"
        ></button>
        <button
          id="button-3"
          onClick={() => nextPage(3)}
          className="selector w-4 h-4 rounded-xl bg-white"
        ></button>
        <button
          id="button-4"
          onClick={() => nextPage(4)}
          className="selector w-4 h-4 rounded-xl bg-white"
        ></button>
      </div>
      <motion.div
        className="z-0"
        animate={{ y: `${y}vh` }}
        transition={{ type: "spring", stiffness: 30 }}
      >
        <div id="content-1" className="flex">
          <ImageContainer
            img_src={screenHeight < 768 ? homepageImageMd : homepageImageLg}
            img_alt={"Woman slightly smiling and looking at camera"}
          />
          <TextContainer
            heading="Fraol Zeleke"
            desc="I am Dr. Fraol Zeleke, a neurology trailblazer. My groundbreaking diagnostic tool,
        patient-centric care, and commitment to mentorship define my legacy,
        recognized through accolades and a lasting impact on healthcare."
          />
        </div>
        <div id="content-2" className="flex">
          <ImageContainer
            img_src={screenHeight < 768 ? educationImageMd : educationImageLg}
            img_alt={"Woman writing on a piece of paper"}
          />
          <TextContainer
            heading="Education"
            desc="Dr. Fraol Zeleke excelled at the esteemed Aetherius Medical Academy, earning a Bachelor's in Neuroscience and later achieving a Master's and Ph.D. in Neurology. This imaginary institution shaped his commitment to patient-centric care and mentorship, laying the groundwork for his groundbreaking contributions to the field."
          />
        </div>
        <div id="content-3" className="flex">
          <ImageContainer
            img_src={screenHeight < 768 ? experienceImageMd : experienceImageLg}
            img_alt={"Woman writing on a piece of paper"}
          />
          <TextContainer
            heading="Experience"
            desc="With a distinguished career, Dr. Fraol Zeleke has pioneered advancements in neurology. His research led to a groundbreaking diagnostic tool for neurological disorders. Beyond his achievements, his empathetic patient care and mentorship have inspired future healthcare professionals. Recognized with awards, Dr. Zeleke continues to shape the landscape of medical science."
          />
        </div>
        <div id="content-4" className="flex">
          <ImageContainer
            img_src={screenHeight < 768 ? contactImageMd : contactImageLg}
            img_alt={"Woman writing on a piece of paper"}
          />
          <TextContainer
            heading="Contact"
            desc="Let’s get in touch. You find me through one the listed contact information."
          />
        </div>
      </motion.div>
    </div>
  )
}
