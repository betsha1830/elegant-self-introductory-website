"use client"

import ImageContainer from "./components/ImageContainer"

// Import image assets

import homepageImage from "@/public/home_page_img.png"
import educationImage from "@/public/education_page.png"
import experienceImage from "@/public/experience_page.png"
import contactImage from "@/public/contact_page.png"

import TextContainer from "./components/TextContainer"

export default function Home() {
  let page_counter = 1

  function nextPage() {
    document.getElementById(`content-${page_counter}`)!.classList.add("hidden")
    page_counter += 1
    document.getElementById(`content-${page_counter}`)!.classList.add("visible")
  }

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <div className="absolute h-screen pl-5 flex items-center">
        <button
          onClick={nextPage}
          className="selector w-auto h-auto p-4 bg-cyan-300"
        >
          Next
        </button>
      </div>
      <div id="content-1" className="flex">
        <ImageContainer
          img_src={homepageImage}
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
          img_src={educationImage}
          img_alt={"Woman writing on a piece of paper"}
        />
        <TextContainer
          heading="Education"
          desc="Dr. Fraol Zeleke excelled at the esteemed Aetherius Medical Academy, earning a Bachelor's in Neuroscience and later achieving a Master's and Ph.D. in Neurology. This imaginary institution shaped his commitment to patient-centric care and mentorship, laying the groundwork for his groundbreaking contributions to the field."
        />
      </div>
      <div id="content-3" className="flex">
        <ImageContainer
          img_src={experienceImage}
          img_alt={"Woman writing on a piece of paper"}
        />
        <TextContainer
          heading="Education"
          desc="Dr. Fraol Zeleke excelled at the esteemed Aetherius Medical Academy, earning a Bachelor's in Neuroscience and later achieving a Master's and Ph.D. in Neurology. This imaginary institution shaped his commitment to patient-centric care and mentorship, laying the groundwork for his groundbreaking contributions to the field."
        />
      </div>
      <div id="content-4" className="flex">
        <ImageContainer
          img_src={contactImage}
          img_alt={"Woman writing on a piece of paper"}
        />
        <TextContainer
          heading="Education"
          desc="Dr. Fraol Zeleke excelled at the esteemed Aetherius Medical Academy, earning a Bachelor's in Neuroscience and later achieving a Master's and Ph.D. in Neurology. This imaginary institution shaped his commitment to patient-centric care and mentorship, laying the groundwork for his groundbreaking contributions to the field."
        />
      </div>
    </div>
  )
}
