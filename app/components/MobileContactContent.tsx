//  Import built-in component

import { StaticImageData } from "next/image"
import MobileImageContainer from "./MobileImageContainer"
import MobileContactContainer from "./MobileContactContainer"

type MobileContactContentProps = {
  header: string
  desc: string
  img_src: StaticImageData
  img_alt: string
  phone: string
  email: string
}

export default function MobileContactContent({
  img_src,
  img_alt,
  header,
  desc,
  phone,
  email,
}: MobileContactContentProps) {
  return (
    <div className="container relative">
      <div className="">
        <MobileImageContainer img_src={img_src} img_alt={img_alt} />
      </div>
      <div className="absolute top-0 left-0">
        <MobileContactContainer
          header={header}
          desc={desc}
          phone={phone}
          email={email}
        />
      </div>
    </div>
  )
}
