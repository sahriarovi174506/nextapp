import { Fragment, useState } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Shape1 from "../../assets/Accordion/Shape 1.png";
import SectionTitle from "../SectionTitle/index";
import React from "react";
import CallIcon from "../../assets/Accordion/call-icon.png";
import Image from "next/image";
import Link from "next/link";

const FaqQuestion = () => {
  const ACdntitles = {
    Accordions: {
      Title: "How to Care for Windows & Doors?",
      Body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed does a eiusmod tempor. There are many variations of passages of available but majority have suffered alteration.",
    },
    MainTitles: {
      title1: "FAQ Questions",
      title2: "General Questions",
    },
  };
  return (
    <section className="px-5 relative overflow-hidden pb-28">
      <ParallaxProvider>
        <Parallax
          easing="easeIn"
          translateX={[0, -300]}
          className="absolute bottom-[25%] left-[13%] z-[-1]"
        >
          <div className="anim w-24 h-52">
            <Image
              src={Shape1}
              width="100%"
              height="100%"
              layout="fill"
              objectFit="none"
              alt="Img"
            />
          </div>
        </Parallax>
      </ParallaxProvider>
      <div className="mx-auto max-w-7xl xl:flex xl:pl-80 lg:pl-0 pl-0 lg:flex block items-center">
        <div className="accordionContent xl:pr-14 lg:pr-10 pr-0 xl:text-left lg:text-left text-center xl:block lg:block grid place-items-center grid-cols-1">
          <div className="ac-Main-Titles">
            <SectionTitle
              headsm={ACdntitles.MainTitles.title1}
              headbig={ACdntitles.MainTitles.title2}
            />
          </div>
          <p
            className="text-[16px] font-medium text-[#6E6E78] py-6"
            data-aos="slide-up"
            data-aos-delay="200"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed does a
            eiusmod tempor.
          </p>
          <div
            className="call-box bg-[#3CC3A3] sm:w-[28rem] w-full text-white pl-8 pt-9 pb-7 pr-8 rounded-md"
            data-aos="slide-up"
            data-aos-delay="300"
          >
            <h1 className="text-[30px] font-medium pb-5 text-left">
              Please Don’t Be Hesitate to Call Us Anytime
            </h1>
            <div className="icon-num flex items-center">
              <Image src={CallIcon} alt="CallIcon" />
              <Link href="tel:+8802 3829 2901">
                <a>
                  <h1 className="text-[22px] font-medium pl-5 text-left hover:opacity-[0.5]">
                    +8802 3829 2901
                  </h1>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="accordion xl:px-0 lg:px-0 md:px-16 sm:px-10 p-0 xl:pt-0 lg:pt-0 pt-12">
          <FaqQuestionCard
            AcdnTitle={ACdntitles.Accordions.Title}
            Acbody={ACdntitles.Accordions.Body}
          />
          <FaqQuestionCard
            AcdnTitle={ACdntitles.Accordions.Title}
            Acbody={ACdntitles.Accordions.Body}
          />
          <FaqQuestionCard
            AcdnTitle={ACdntitles.Accordions.Title}
            Acbody={ACdntitles.Accordions.Body}
          />
          <FaqQuestionCard
            AcdnTitle={ACdntitles.Accordions.Title}
            Acbody={ACdntitles.Accordions.Body}
          />
          <FaqQuestionCard
            AcdnTitle={ACdntitles.Accordions.Title}
            Acbody={ACdntitles.Accordions.Body}
          />
        </div>
      </div>
    </section>
  );
};

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const FaqQuestionCard = ({ AcdnTitle, Acbody }) => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="main-accordion" data-aos="slide-up" data-aos-delay="100">
      <Fragment>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            <h1 className="text-[#10131F] text-[18px] font-semibold hover:text-[#3CC3A3]">
              {AcdnTitle}
            </h1>
          </AccordionHeader>
          <AccordionBody>
            <p className="text-[16px] font-medium text-[#6E6E78]">{Acbody}</p>
          </AccordionBody>
        </Accordion>
      </Fragment>
    </div>
  );
};
export default FaqQuestion;
