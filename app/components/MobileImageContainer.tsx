import Image, { StaticImageData } from "next/image"

type mobileImageContainerProps = {
  img_src: StaticImageData
  img_alt: string
}

export default function MobileImageContainer({
  img_src,
  img_alt,
}: mobileImageContainerProps) {
  return (
    <div>
      <Image className="w-screen h-screen" src={img_src} alt={img_alt} />
    </div>
  )
}
