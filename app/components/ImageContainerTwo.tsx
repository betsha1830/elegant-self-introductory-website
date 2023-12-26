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
    <div className="image-container-two flex justify-center items-center rounded-md h-screen">
      <div className="shadow-cust">
        <Image
          className="rounded-md h-[80vh] w-[30vw]"
          src={img_src}
          alt={img_alt}
        />
      </div>
    </div>
  )
}
