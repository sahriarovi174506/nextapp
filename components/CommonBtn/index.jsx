import React from "react";
import Link from "next/link";

const CommonBtn = ({ btnText }) => {
  return (
    <button
      className="p-0 rounded-[0px] block"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <Link href="/">
        <a className="bg-[#3CC3A3] py-[15px] px-[28px] text-white block rounded font-[700] text-[18px] hover:shadow-xl hover:bg-white duration-300 hover:text-[#10131F]">
          {btnText}
        </a>
      </Link>
    </button>
  );
};

export default CommonBtn;
