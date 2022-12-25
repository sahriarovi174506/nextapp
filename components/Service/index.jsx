import React from "react";
import Image from "next/image";
import Link from "../../node_modules/next/link";
import ServiceBox from "../Service/ServiceItem/index";
import ServiceOne from "../../assets/ServiceImages/simcard.png";
import ServiceTwo from "../../assets/ServiceImages/pen-tool-2.png";
import ServiceThree from "../../assets/ServiceImages/graph.png";
import ServiceBg from "../../assets/ServiceImages/Bg.png";

const Service = () => {
  return (
    <section className="py-32 px-4 before:bg-[#10131F] before:z-[-9999] before:content-[''] before:w-full relative before:h-[100%] before:absolute before:left-0 before:top-0 ">
      <div className="max-w-[1320px] mx-auto">
        <div className="sm:flex block sm:text-left text-center justify-between items-center pb-[65px]">
          <div data-aos="slide-right" data-aos-delay="100">
            <h5 className="text-[#F1554C] text-[18px] font-[600] pb-[15px]">
              Our Popular Services
            </h5>
            <h2 className="text-[#ffffff] text-[48px] font-[600]">
              We Provide with Passion
            </h2>
          </div>
          <div data-aos="slide-left" data-aos-delay="200">
            <Link href="/">
              <a className="bofore:content-[''] before:bg-[#3CC3A3] before:w-full before:h-[1.7px] before:absolute relative before:left-0 before:bottom-[-5px] text-[#3CC3A3] text-[18px] font-semibold hover:text-[#ffffff] before:hover:bg-[#ffffff]">
                Browse All Services
              </a>
            </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:grid-rows-1 grid-rows-3 gap-5">
          <div
            className="bg-sky-900 lg:px-[50px] px-[30px] py-[50px] box-one rounded-[5px]"
            data-aos="slide-right"
          >
            <ServiceBox
              serviceImg={ServiceOne}
              serviceTitle="Web Development"
              ServiceParagraph="Eegt gravida cum natoque for the
              penatibus et magnised. Adipiscin pellentesque habitant."
            />
          </div>
          <div
            className="relative lg:px-[50px] px-[30px] py-[50px] box-two"
            data-aos="slide-up"
          >
            <ServiceBox
              serviceImg={ServiceTwo}
              serviceTitle="Web Development"
              ServiceParagraph="Eegt gravida cum natoque for the
              penatibus et magnised. Adipiscin pellentesque habitant."
            />
            <div className="service-bg">
              <Image
                src={ServiceBg}
                alt="Service image"
                layout="fill"
                objectFit="cover"
                className="absolute left-0 top-0 w-full h-full z-[-9] rounded-[5px]"
              />
            </div>
          </div>
          <div
            className="bg-sky-900 lg:px-[50px] px-[30px] py-[50px] box-three rounded-[5px]"
            data-aos="slide-left"
          >
            <ServiceBox
              serviceImg={ServiceThree}
              serviceTitle="Web Development"
              ServiceParagraph="Eegt gravida cum natoque for the
              penatibus et magnised. Adipiscin pellentesque habitant."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
