import React from "react";
import Image from "next/image";
import FeaturedtwoImg from "../../assets/FeaturedTwo/FeaturedtwoImg.png";
import SectionTitle from "../SectionTitle";
import ServiceTwo from "../Service/ServiceItem/index";
import ServiceOne from "../../assets/ServiceImages/pen-tool-2.png";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import FeaturedTwoAnim from "../../assets/FeaturedTwo/Feature2-anim1.png";

const FeaturedTwo = () => {
  const FeaturedTwoTitles = {
    title1: "Core Features",
    title2: "Why You Choose FolioEdge",
  };
  const MainBoxTexts = {
    serviceTitle1: "Creative Design",
    serviceTitle2: "Boost Your Business",
    serviceTitle3: "Expert Team Member",
    serviceTitle4: "24/7 Customer Support",
    ServiceParagraph:
      "Eget gravida cum natoque for the penatibus et magnised. Adipiscin habitant.",
  };
  return (
    <section className="FeaturedTwo mb-28 relative z-[1]">
      {/* parallax animation */}
      <ParallaxProvider>
        <Parallax
          easing="easeIn"
          speed={10}
          translateY={[0, 300]}
          rotate={[0, 300]}
          className="absolute top-[15%] right-[7%] z-[1]"
        >
          <div className="anim w-24 h-52">
            <Image
              src={FeaturedTwoAnim}
              layout="fill"
              objectFit="none"
              alt="Img"
            />
          </div>
        </Parallax>
      </ParallaxProvider>
      {/* parallax animation */}
      <div className="mx-auto max-w-full relative cont">
        <div className="minimize-img">
          <div className="M-img w-[40%] h-[100%]">
            <Image
              src={FeaturedtwoImg}
              alt="FeaturedtwoImg"
              layout="responsive"
              objectFit="contain"
              className="Featured-img"
            />
          </div>
        </div>
        <div className="content w-[60%] h-[100%] bg-[#FFF5F3] pl-14 py-[42.2px] absolute right-0 top-0 flex items-center">
          <div className="content-wrap">
            <SectionTitle
              headsm={FeaturedTwoTitles.title1}
              headbig={FeaturedTwoTitles.title2}
            />
            <div className="Featured-two grid sm:grid-cols-2 grid-cols-1 sm:grid-rows-2 grid-rows-4 gap-7">
              <ServiceTwo
                serviceImg={ServiceOne}
                serviceTitle={MainBoxTexts.serviceTitle1}
                ServiceParagraph={MainBoxTexts.ServiceParagraph}
              />
              <ServiceTwo
                serviceImg={ServiceOne}
                serviceTitle={MainBoxTexts.serviceTitle1}
                ServiceParagraph={MainBoxTexts.ServiceParagraph}
              />
              <ServiceTwo
                serviceImg={ServiceOne}
                serviceTitle={MainBoxTexts.serviceTitle1}
                ServiceParagraph={MainBoxTexts.ServiceParagraph}
              />
              <ServiceTwo
                serviceImg={ServiceOne}
                serviceTitle={MainBoxTexts.serviceTitle1}
                ServiceParagraph={MainBoxTexts.ServiceParagraph}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTwo;
