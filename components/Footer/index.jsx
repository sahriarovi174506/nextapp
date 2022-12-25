import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DescP } from "../BlogSlider";
import { SocialLinks } from "../Team/TeamCard/index";
import FooterLogo from "../../assets/footer/footer-logo.png";
import FooterAnim1 from "../../assets/footer/footer-anim1.png";
import FooterAnim2 from "../../assets/footer/footer-anim2.png";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const Footer = () => {
  return (
    <section className="footer_section px-5 bg-[#10131F] pt-28 relative z-[1]">
      {/* parallax animation */}
      <ParallaxProvider>
        <Parallax
          easing="easeIn"
          speed={10}
          translateY={[0, 300]}
          rotate={[0, 300]}
          className="absolute bottom-[20%] left-[7%] z-[-1]"
        >
          <div className="anim w-24 h-52">
            <Image
              src={FooterAnim1}
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
          translateX={[0, -300]}
          className="absolute top-[7%] right-[10%] z-[-1]"
        >
          <div className="anim w-24 h-52">
            <Image
              src={FooterAnim2}
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
      <div className="mx-auto max-w-7xl lg:pb-24 pb-0">
        <div className="grid lg:grid-cols-4 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-4">
          <div className="footer_box1 lg:pr-10 md:pr-6 pr-0">
            {/* logo */}
            <Link href="/">
              <a>
                <div className="logo pb-8">
                  <Image
                    alt="Mountains"
                    objectFit="contain"
                    src={FooterLogo}
                    className="lg:w-[100%] w-[120px]"
                  />
                </div>
              </a>
            </Link>
            {/* desc */}
            <DescP desc="It is a long established fact that a reader will be distracted by the readable content." />
            {/* Social liknks */}
            <SocialLinks />
          </div>
          {/*  */}
          <div className="lg:pb-0 pb-8">
            <FooterUls
              footerHead="Quick Links"
              link1="clients"
              link2="Case Studies"
              link3="Privacy Policy"
              link4="Gallery"
              link5="FAQ"
            />
          </div>
          <div className="lg:pb-0 md:pb-0 pb-8">
            <FooterUls
              footerHead="Legal"
              link1="Tearms & Condition"
              link2="Cookie Policy"
              link3="Privacy Policy"
              link4="Feedback"
            />
          </div>
          <div className="lg:pb-0 md:pb-0 pb-8">
            <FooterUls
              footerHead="Contact Info"
              link1="yourmailaddress"
              link2="yourmailaddress@gmail.com"
              link3="423 Winding Crek Road, Sydney"
            />
          </div>
        </div>
      </div>
      {/* footer bottom */}
      <div className="footer_bottom flex items-center justify-between mx-auto max-w-7xl py-8 border-t-[#ffffff12] border-t-[0.4px]">
        <FooterUls link1="Privacy Policy" link2="Cookies" />
        <div>
          <DescP desc="© 2022 FolioEdge, Inc. All rights reserved" />
        </div>
      </div>
    </section>
  );
};

const FooterUls = ({ footerHead, link1, link2, link3, link4, link5 }) => {
  return (
    <div className="footerUls">
      <h1 className="text-[24px] font-medium text-[#FFFFFF] pb-[38px]">
        {footerHead}
      </h1>
      <ul className="footerLinks">
        <Footerlis footerLinks={link1} />
        <Footerlis footerLinks={link2} />
        <Footerlis footerLinks={link3} />
        <Footerlis footerLinks={link4} />
        <Footerlis footerLinks={link5} />
      </ul>
    </div>
  );
};

const Footerlis = ({ footerLinks }) => {
  return (
    <li>
      <Link href="/">
        <a className="block">
          <DescP desc={footerLinks} />
        </a>
      </Link>
    </li>
  );
};

export default Footer;
