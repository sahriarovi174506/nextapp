import React from "react";
import CommonBtn from "../CommonBtn";
import SectionTitle from "../SectionTitle/index";
import { MdOutlineEmail } from "react-icons/md";

const Subscription = () => {
  const title1 = "Get Latest Update";
  const title2 = "Subscribe Newsletter";
  const btntxt = "Subscribe Now";
  return (
    <section className="Subscribtion_form px-[15px] bg-[#F2F2F2] py-24">
      <div className="mx-auto max-w-7xl">
        <div className="Slider-titles md:grid md:grid-cols-2 md:grid-rows-1 block items-center ">
          <div className="col-span-1">
            <SectionTitle headsm={title1} headbig={title2} />
          </div>
          <div
            className="col-span-1 md:pl-0 pl-[0] md:pt-0 pt-8"
            data-aos="flip-right"
            data-aos-delay="100"
          >
            <form action="post" className="form">
              <input
                type="text"
                placeholder="Enter your mail address"
                className="outline-none pl-11 text-[#6E6E78] placeholder-[#6E6E78] text-[18px] font-medium"
              />
              <div className="form-btn">
                <CommonBtn btnText={btntxt} />
              </div>
              <div className="absolute text-[#6E6E78] text-[24px] left-4 top-[50%] translate-y-[-50%] pt-[1px]">
                <MdOutlineEmail />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
