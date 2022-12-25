import Link from "next/link";
import React from "react";
import Image from "next/image";
import TestimonialBg from "../../assets/Testimonials/World-Map.png";
import anim1 from "../../assets/anims/Shape 1.png";
import anim2 from "../../assets/anims/Shape 2.png";
import anim3 from "../../assets/anims/Shape 3.png";
import SectionTitle from "../SectionTitle";
import ReactSlider from "react-slick";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const Testimonials = () => {
  const title1 = "Clinet’s Feedback";
  const title2 = "What Say’s Our Happy Customers";
  // slider
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
  };
  return (
    <section className="px-5 pt-28 pb-44 before:bg-[#10131F] before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:z-[-1] relative">
      <div className="bg w-[100%] h-[100%] left-0 top-0 absolute ">
        <Image
          className="absolute left-0 top-0"
          src={TestimonialBg}
          width="100%"
          height="100%"
          layout="fill"
          objectFit="none"
          alt="HeaderImg"
        />
      </div>
      <div className="mx-auto md:max-w-[32rem] max-w-[100%]">
        {/* Titles */}
        <div className="Slider-titles testimo-titles flex justify-center ">
          <SectionTitle headsm={title1} headbig={title2} />
        </div>
        <ReactSlider {...settings}>
          <div data-aos="slide-up" data-aos-delay="100">
            <TestimonialCard
              Name="Robertson Smith"
              profession="UI/UX Designer"
            />
          </div>
          <TestimonialCard Name="Robertson Smith" profession="UI/UX Designer" />
          <TestimonialCard Name="Robertson Smith" profession="UI/UX Designer" />
          <TestimonialCard Name="Robertson Smith" profession="UI/UX Designer" />
        </ReactSlider>
      </div>
      <ParallaxProvider>
        <Parallax
          speed={0}
          translateX={[0, -200]}
          easing="easeIn"
          className="absolute top-[23%] left-[20%] z-[-1]"
        >
          <div className="anim w-24 h-24">
            <Image
              src={anim1}
              width="100%"
              height="100%"
              layout="fill"
              objectFit="none"
              alt="Img"
            />
          </div>
        </Parallax>
        <Parallax
          speed={-5}
          easing="easeIn"
          rotate={[0, 300]}
          className="absolute bottom-[7%] left-[5%] z-[-1]"
        >
          <div className="anim w-24 h-24">
            <Image
              src={anim3}
              width="100%"
              height="100%"
              layout="fill"
              objectFit="none"
              alt="Img"
            />
          </div>
        </Parallax>
        <Parallax
          speed={-5}
          translateX={[0, 200]}
          translateY={[0, 200]}
          easing="easeIn"
          className="absolute top-[30%] right-[10%] z-[-1]"
        >
          <div className="anim w-24 h-24">
            <Image
              src={anim2}
              width="100%"
              height="100%"
              layout="fill"
              objectFit="none"
              alt="Img"
            />
          </div>
        </Parallax>
      </ParallaxProvider>
    </section>
  );
};

const TestimonialCard = ({ profession, Name }) => {
  return (
    <div className="text-center px-3">
      <h2 className="text-[18px] text-white opacity-[0.8] pb-10 pt-5">
        “ There are many variations of passages of Lorem Ipsum available, but
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't use a passage look even slightly
        believable.”
      </h2>
      <div className="testimo-names">
        <Link href="/">
          <a className="text-[24px] font-[600] text-white">{Name}</a>
        </Link>
        <h5 className="text-[18px] font-[500] text-white opacity-[0.8]">
          {profession}
        </h5>
      </div>
    </div>
  );
};

export default Testimonials;
