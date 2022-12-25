import React from "react";
import SectionTitle from "../SectionTitle/index";
import Link from "next/link";
import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import BlogAnim1 from "../../assets/BlogSlider/blogslide-anim1.png";
import BlogAnim2 from "../../assets/BlogSlider/blogslide-anim2.png";
// slider imports
import ReactSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import SliderCard from "../Slider/SliderCard/index";
import SlideImg1 from "../../assets/BlogSlider/blog-slider-1.jpg";
import SlideImg2 from "../../assets/BlogSlider/blog-slider-2.jpg";
import SlideImg3 from "../../assets/BlogSlider/blog-slider-3.jpg";
import CommonBtn from "../CommonBtn";

const BlogSlider = () => {
  const title1 = "Blog & News";
  const title2 = "Latest News & Blog";
  const figcap1 = "Corporate";
  const figcap2 = "Learn How to Improvment Your Writing Skills with Us";
  const figcap3 = "Design";
  const figcap5 = "Marketing";
  const btnTxt = "Download CV";
  // slider
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    centerMode: false,
    responsive: [
      {
        breakpoint: 866,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="relative Blog_Slider pb-16 lg:px-[0px] md:px-[15px] sm:px-[0px]">
      {/* parallax animation */}
      <ParallaxProvider>
        <Parallax
          easing="easeIn"
          translateY={[0, 300]}
          className="absolute bottom-[7%] left-[13%] z-[-1]"
        >
          <div className="anim w-24 h-52">
            <Image
              src={BlogAnim1}
              width="100%"
              height="100%"
              layout="fill"
              objectFit="none"
              alt="Img"
            />
          </div>
        </Parallax>
        <Parallax
          speed={10}
          rotate={[0, 300]}
          easing="easeIn"
          translateY={[0, -300]}
          className="absolute top-[7%] right-[10%] z-[-1]"
        >
          <div className="anim w-24 h-52">
            <Image
              src={BlogAnim2}
              width="100%"
              height="100%"
              layout="fill"
              objectFit="none"
              alt="Img"
            />
          </div>
        </Parallax>
      </ParallaxProvider>
      {/* parallax animation */}
      <div className="mx-auto max-w-[81rem]">
        <div className="Slider-titles md:pb-10 pb-16 md:grid md:grid-cols-2 md:grid-rows-1 block items-center ">
          <div className="col-span-1 pl-[15px]">
            <SectionTitle headsm={title1} headbig={title2} />
          </div>
          <div
            className="col-span-1 lg:pl-44 md:pl-0 pl-[15px]"
            data-aos="fade-up-left"
            data-aos-delay="200"
          >
            <DescP
              desc="We create unique and modern designs with web & hands. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed does a eiusmod tempor."
            />
          </div>
        </div>
        {/* Slider area start */}
        <ReactSlider {...settings}>
          <div data-aos="flip-right" data-aos-delay="100">
            <SliderCard
              SlideImage={SlideImg1}
              figCaps1={figcap1}
              figCaps2={figcap2}
            />
            <ReadMoreBtn />
          </div>
          <div data-aos="flip-right" data-aos-delay="300">
            <SliderCard
              SlideImage={SlideImg2}
              figCaps1={figcap3}
              figCaps2={figcap2}
            />
            <ReadMoreBtn />
          </div>
          <div data-aos="flip-right" data-aos-delay="500">
            <SliderCard
              SlideImage={SlideImg3}
              figCaps1={figcap5}
              figCaps2={figcap2}
            />
            <ReadMoreBtn />
          </div>
          <div>
            <SliderCard
              SlideImage={SlideImg1}
              figCaps1={figcap1}
              figCaps2={figcap2}
            />
            <ReadMoreBtn />
          </div>
        </ReactSlider>
        {/* Slider area start */}
        <div className="pt-16 flex justify-center">
          <CommonBtn btnText={btnTxt} />
        </div>
      </div>
    </section>
  );
};

export function DescP({ desc }) {
  return (
    <div>
      <p className="text-[16px] text-[#6E6E78] font-normal">{desc}</p>
    </div>
  );
}
export function ReadMoreBtn() {
  return (
    <Link href="/">
      <a className="ml-[15px] text-[18px] font-semibold text-[#10131F] hover:text-[#3CC3A3] relative before:content-[''] before:w-[100%] before:h-[2px] before:bg-[#3CC3A3] before:absolute before:left-0 before:bottom-[-2px] before:opacity-0 before:hover:opacity-[1]">
        Read More
      </a>
    </Link>
  );
}

export default BlogSlider;
