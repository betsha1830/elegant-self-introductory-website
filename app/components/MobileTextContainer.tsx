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
}

export default function MobileTextContainer({
  header,
  desc,
}: mobileTextContainerProps) {
  return (
    <div className="w-screen h-screen bg-gradient-to-b text-white from-transparent text-justify to-wood flex justify-center flex-col items-center">
      <div className={"text-6xl header " + crimson_text.className}>
        {header}
      </div>
      <div className={"text-3xl p-10 desc " + cormorant.className}>{desc}</div>
    </div>
  )
}
