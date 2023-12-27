import { StaticImageData } from "next/image"
import MobileImageContainer from "./MobileImageContainer"
import MobileTextContainer from "./MobileTextContainer"

type MobileContentProps = {
  header: string
  desc: string
  img_src: StaticImageData
  img_alt: string
}

export default function MobileContent({
  img_src,
  img_alt,
  header,
  desc,
}: MobileContentProps) {
  return (
    <div className="container relative">
      <div className="">
        <MobileImageContainer img_src={img_src} img_alt={img_alt} />
      </div>
      <div className="absolute top-0 left-0">
        <MobileTextContainer header={header} desc={desc} />
      </div>
    </div>
  )
}
