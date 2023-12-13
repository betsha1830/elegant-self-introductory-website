import Image, { StaticImageData } from "next/image"

type ImageContainerProps = {
  img_src: StaticImageData
  img_alt: string
}

export default function ImageContainer({
  img_src,
  img_alt,
}: ImageContainerProps) {
  return (
    <div className="image-container w-1/2">
      <Image className=" w-full" src={img_src} alt={img_alt} />
    </div>
  )
}
