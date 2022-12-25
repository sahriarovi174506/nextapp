import React from "react";
import SectionTitle from "../SectionTitle/index";
// slider imports
import ReactSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import SliderCard from "./SliderCard";
import SlideImg1 from "../../assets/Slider/SliderImg-1.jpg";
import SlideImg2 from "../../assets/Slider/SliderImg-2.jpg";
import SlideImg3 from "../../assets/Slider/SliderImg-3.jpg";
import CommonBtn from "../CommonBtn";

const Slider = () => {
  const title1 = "Popular Works";
  const title2 = "Our Recent Case-Studies";
  const figcap1 = "Development";
  const figcap2 = "Website Design & Development";
  const figcap3 = "Design";
  const figcap4 = "iOS Apps Design & Development";
  const figcap5 = "Marketing";
  const figcap6 = "Minimal Product Development";
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
        breakpoint: 766,
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
    <section className="Slider pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-center Slider-titles pb-10">
          <SectionTitle headsm={title1} headbig={title2} />
        </div>
        {/* Slider area start */}
        <ReactSlider {...settings}>
          <div data-aos="fade-up-right" data-aos-delay="100">
            <SliderCard
              SlideImage={SlideImg1}
              figCaps1={figcap1}
              figCaps2={figcap2}
            />
          </div>
          <div data-aos="fade-up-right" data-aos-delay="200">
            <SliderCard
              SlideImage={SlideImg2}
              figCaps1={figcap3}
              figCaps2={figcap4}
            />
          </div>
          <div data-aos="fade-up-right" data-aos-delay="300">
            <SliderCard
              SlideImage={SlideImg3}
              figCaps1={figcap5}
              figCaps2={figcap6}
            />
          </div>
          <div data-aos="fade-up-right" data-aos-delay="400">
            <SliderCard
              SlideImage={SlideImg1}
              figCaps1={figcap1}
              figCaps2={figcap2}
            />
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

export default Slider;
