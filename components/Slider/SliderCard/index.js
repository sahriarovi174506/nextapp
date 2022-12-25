import React from "react";
import Image from "next/image";
import Link from "next/link";

const SliderCard = ({ figCaps1, figCaps2, SlideImage }) => {
  return (
    <div className="Slider-card px-[15px]">
      <figure className="rounded-md">
        <Image src={SlideImage} alt="SlideImg1" className="rounded-md" />
      </figure>
      <div className="pt-3">
        <h5 className="text-[18px] font-[500] text-[#6E6E78] pb-2">
          {figCaps1}
        </h5>
        <Link href="/">
          <a>
            <h2 className="text-[25px] font-[600] text-[#10131F] hover:text-[#3CC3A3] py-3">
              {figCaps2}
            </h2>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SliderCard;
