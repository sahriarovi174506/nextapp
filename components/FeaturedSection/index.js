import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";
import TikIcon from "../../assets/Featured/fill-tick.png";
import FeaturedImg1 from "../../assets/Featured/Featured-Img-1.png";
import FeaturedImg2 from "../../assets/Featured/Featured-Img-2.png";
import React from "react";
import SectionTitle from "../SectionTitle";

const Featured = () => {
  const title1 = "Know About Us";
  const title2 = "We Provide with Passion";
  return (
    <section className="pb-28 md:pt-28 sm:pt-20 pt-0 relative px-4">
      {/* featured-imgs-one */}
      <div className="absolute left-0 translate-y-[-50%] top-[50%] bg-img">
        <Image src={FeaturedImg1} alt="FeaturedImg1" layout="fixed" />
        <p className="text-over absolute bottom-9 right-8 bg-[#3cc3a3] p-8 text-lg font-medium text-[#FFFFFF] w-96 rounded">
          “ There are many variatio of passages of available but majority have
          suffered alteration in some form.”
        </p>
      </div>
      {/* featured-imgs-one */}
      <div className="absolute right-0 translate-y-[-50%] top-[50%] bg-img">
        <Image src={FeaturedImg2} alt="FeaturedImg1" layout="fixed" />
      </div>
      <div
        className="max-w-7xl mx-auto flex 2xl:justify-end justify-center"
        data-aos="flip-left"
        data-aos-delay="100"
      >
        <Tabs className="bg-[#F7F7F7] w-2/3 sm:p-14 p-8 rounded-md main-tab sm:text-start text-center">
          {/* featured-imgs */}
          <SectionTitle headsm={title1} headbig={title2} />
          <TabList className="sm:flex grid sm:gap-0 gap-5 sm:justify-start justify-center">
            <Tab className="bg-[#ffffff] mr-4 py-3 px-6 rounded-lg w-40 text-center text-[#10131F] text-lg font-semibold duration-200 cursor-pointer">
              Our Mission
            </Tab>
            <Tab className="bg-[#ffffff] mr-4 py-3 px-6 rounded-lg w-40 text-center text-[#10131F] text-lg font-semibold duration-200 cursor-pointer">
              Our Vision
            </Tab>
            <Tab className="bg-[#ffffff] mr-4 py-3 px-6 rounded-lg w-40 text-center text-[#10131F] text-lg font-semibold duration-200 cursor-pointer">
              History
            </Tab>
          </TabList>
          <TabPanel>
            <TabCon
              tabText1="Guidance To Your Start-Up."
              tabText2="Save Time & Money!"
              tabText3="Create Your Business Possibilites!"
            />
          </TabPanel>
          <TabPanel>
            <TabCon
              tabText1="Get The Best Service"
              tabText2="Have The Best Experience Of your lifetime"
              tabText3="Best Support Will be provided"
            />
          </TabPanel>
          <TabPanel>
            <TabCon
              tabText1="Guidance To Your Start-Up."
              tabText2="get 24/7 Hour Support"
              tabText3="Create Your Own Business"
            />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

const TabCon = ({ tabText1, tabText2, tabText3 }) => {
  return (
    <div className="tabContent sm:block grid place-items-center">
      <p className=" text-base font-normal text-[#6E6E78] py-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed does a
        eiusmod tempor. There are many variations of passages of available but
        majority have suffered alteration in some form, by humour or randomised
        words which don't look even believable.
      </p>
      <ul className="m-0 p-0 w-fit">
        <li className="flex items-center py-2">
          <div className="pr-4 flex items-center w-12">
            <Image src={TikIcon} alt="TikIcon" />
          </div>
          <h4 className="text-[#10131F] text-lg font-bold text-left">
            {tabText1}
          </h4>
        </li>
        <li className="flex items-center py-2">
          <div className="pr-4 flex items-center w-12">
            <Image src={TikIcon} alt="TikIcon" />
          </div>
          <h4 className="text-[#10131F] text-lg font-bold text-left">
            {tabText2}
          </h4>
        </li>
        <li className="flex items-center py-2">
          <div className="pr-4 flex items-center w-12">
            <Image src={TikIcon} alt="TikIcon" />
          </div>
          <h4 className="text-[#10131F] text-lg font-bold text-left">
            {tabText3}
          </h4>
        </li>
      </ul>
    </div>
  );
};
export default Featured;
