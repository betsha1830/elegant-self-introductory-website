//  Import image assets

import themeOne from "@/public/themeOne.png"
import themeTwo from "@/public/themeTwo.png"

//  Import built-in components

import Link from "next/link"
import Image from "next/image"

//  Import fonts
import { Crimson_Text } from "next/font/google"

const crimson_text = Crimson_Text({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
})

export default function Page() {
  return (
    <div className="page flex flex-col pt-24 items-center w-screen h-screen">
      <div className={"text-8xl " + crimson_text.className}>Choose a Theme</div>
      <div className="flex gap-10 h-full items-center">
        <Link href={"/themeOne"}>
          <Image className="w-[38em] bg-wood" src={themeOne} alt="" />
        </Link>
        <Link href={"/themeTwo"}>
          <Image className="w-[38em] bg-wood" src={themeTwo} alt="" />
        </Link>
      </div>
    </div>
  )
}
