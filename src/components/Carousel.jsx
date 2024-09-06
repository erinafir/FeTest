"use client";

import { Carousel } from "flowbite-react";
import wbanner1 from "../../public/assets/wbanner1.png";
import wbanner2 from "../../public/assets/wbanner2.png";
import wbanner3 from "../../public/assets/wbanner3.png";
import mbanner1 from "../../public/assets/mbanner1.png";
import mbanner2 from "../../public/assets/mbanner2.png";
import mbanner3 from "../../public/assets/mbanner3.png";
import Image from "next/image";

export function CarouselImg() {
  return (
    <>
    <div className="h-56 sm:hidden">
      <Carousel>
        <Image src={mbanner1} alt="..." />
        <Image src={mbanner2} alt="..." />
        <Image src={mbanner3} alt="..." />
      </Carousel>
    </div>
    <div className="hidden sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <Image src={wbanner1} alt="..." />
        <Image src={wbanner2} alt="..." />
        <Image src={wbanner3} alt="..." />
      </Carousel>
    </div>
    </>
  );
}
