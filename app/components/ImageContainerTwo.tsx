import Image, { StaticImageData } from "next/image"

type ImageContainerTwoProps = {
  img_src: StaticImageData
  img_alt: string
}

export default function ImageContainerTwo({
  img_alt,
  img_src,
}: ImageContainerTwoProps) {
  return (
    <div className="image-container-two rounded-md w-1/2">
      <div className="">
        <Image src={img_src} alt={img_alt} />
      </div>
    </div>
  )
}
