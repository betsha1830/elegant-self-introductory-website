import { Crimson_Text, Cormorant } from "next/font/google"

import phoneIcon from "@/public/phone-calling-svgrepo-com 1.svg"
import emailIcon from "@/public/email-svgrepo-com 1.svg"

import Image from "next/image"

const crimson_text = Crimson_Text({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
})

const cormorant = Cormorant({
  subsets: ["latin"],
  display: "swap",
})

type TextContainerProps = {
  heading: string
  desc: string
  phone: string
  email: string
}

export default function ContactContainer({
  heading,
  desc,
  phone,
  email,
}: TextContainerProps) {
  return (
    <div className="text-container bg-wood text-white w-1/2 h-screen flex flex-col justify-center text-justify px-16">
      <h1
        className={
          "heading font-heading text-6xl pb-8 " + crimson_text.className
        }
      >
        {heading}
      </h1>
      <div className={"desc font-desc text-3xl " + cormorant.className}>
        {desc}
      </div>
      <div className={"desc font-desc" + cormorant.className}>
        <div className="flex mt-8 items-center gap-x-5 text-3xl">
          <Image src={phoneIcon} alt="phone icon" />+{phone}
        </div>
      </div>
      <div className={"desc font-desc" + cormorant.className}>
        <div className="flex mt-8 items-center gap-x-5 text-3xl">
          <Image src={emailIcon} alt="email icon" />
          {email}
        </div>
      </div>
    </div>
  )
}
