import React from "react";
import Image from "next/image";

const ServiceBox = ({ serviceImg, serviceTitle, ServiceParagraph }) => {
  return (
    <div className="service-item" data-aos="slide-up" data-aos-delay="100">
      <figure className="flex rounded-full w-[72px] h-[72px] bg-[#FDB12E] justify-center items-center">
        <Image
          src={serviceImg}
          alt="Service image"
          layout="fixed"
          objectFit="contain"
          className="w-6 h-6"
        />
      </figure>
      <h1 className="text-[#ffffff] text-[28px] font-[600] py-4">
        {serviceTitle}
      </h1>
      <p className="text-[#ffffff] text-[17px] font-[500]">
        {ServiceParagraph}
      </p>
    </div>
  );
};

export default ServiceBox;
