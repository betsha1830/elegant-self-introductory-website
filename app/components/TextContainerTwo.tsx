import { Crimson_Text, Cormorant, Whisper } from "next/font/google"

const crimson_text = Crimson_Text({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
})

const whisper = Whisper({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
})

const cormorant = Cormorant({
  subsets: ["latin"],
  display: "swap",
})

type TextContainerProps = {
  heading: string
  desc: string
}

export default function TextContainerTwo({
  heading,
  desc,
}: TextContainerProps) {
  return (
    <div className="text-container bg-wood text-white h-screen flex flex-col text-justify">
      <div className="flex flex-col justify-center h-screen px-16">
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
      </div>
    </div>
  )
}
