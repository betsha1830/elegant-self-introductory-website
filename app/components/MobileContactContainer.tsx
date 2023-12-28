//  Import image assets

import phoneIcon from "@/public/phone-calling-svgrepo-com 1.svg"
import emailIcon from "@/public/email-svgrepo-com 1.svg"

//  Import built-in components

import Image from "next/image"

//  Import custom fonts

import { Cormorant, Crimson_Text } from "next/font/google"

const cormorant = Cormorant({
  subsets: ["latin"],
  display: "swap",
})

const crimson_text = Crimson_Text({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
})

//  Create prop types

type mobileTextContainerProps = {
  header: string
  desc: string
  email: string
  phone: string
}

export default function MobileContactContainer({
  header,
  desc,
  email,
  phone,
}: mobileTextContainerProps) {
  return (
    <div className="w-screen h-screen bg-gradient-to-b text-white from-transparent text-justify to-wood flex justify-center flex-col items-center">
      <div className={"text-6xl header " + crimson_text.className}>
        {header}
      </div>
      <div className={"text-3xl p-10 desc " + cormorant.className}>{desc}</div>
      <div className="contacts">
        <div className={"desc font-desc " + cormorant.className}>
          <div className="flex mt-8 items-center gap-x-5 text-3xl">
            <Image src={phoneIcon} alt="phone icon" />+{phone}
          </div>
        </div>
        <div className={"desc font-desc " + cormorant.className}>
          <div className="flex mt-8 items-center gap-x-5 text-3xl">
            <Image src={emailIcon} alt="email icon" />
            {email}
          </div>
        </div>
      </div>
    </div>
  )
}
