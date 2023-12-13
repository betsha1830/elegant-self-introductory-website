import { Crimson_Text, Cormorant } from "next/font/google"

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
}

export default function TextContainer({ heading, desc }: TextContainerProps) {
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
    </div>
  )
}
