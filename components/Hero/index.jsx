/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderImg from "../../assets/Hero-section/hero-section.jpg";
import VideoLightBox from "../../components/VideoLightBox/index";

const Header = () => {
  return (
    <section className="header-section relative pt-64 px-4">
      <div className="bg w-[100%] h-[100%] left-0 top-0 absolute z-[-1]">
        <Image
          className="absolute left-0 top-0"
          src={HeaderImg}
          layout="fill"
          objectFit="cover"
          alt="HeaderImg"
        />
      </div>
      <div className="max-w-[1320px] mx-auto">
        <div className="grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2">
          <div
            className="content-left text-white bg-[#3cc3a3e0] md:pl-14 pl-8 md:pt-24 pt-16 md:pb-20 pb-14 md:pr-20 pr-10 block rounded-t-[10px]"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h5 className=" md:text-4xl text-3xl font-[600]">
              Creative Agency
            </h5>
            <h1 className=" md:text-7xl text-6xl font-[600] md:leading-[6rem] leading-[4rem] py-10">
              We’ll Help to Grow Your Businessv
            </h1>
            <p className="text-[20px] font-[500] pb-9">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when at its layout.
            </p>
            <button>
              <Link href="/">
                <a className="bg-white py-[15px] px-[28px] text-[#10131F] block rounded font-[700] text-[18px] hover:shadow-xl hover:bg-[#10131F] duration-300 hover:text-white">
                  Download CV
                </a>
              </Link>
            </button>
          </div>
          {/* video light box */}
          <div className="flex justify-center items-center relative">
            <VideoLightBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
