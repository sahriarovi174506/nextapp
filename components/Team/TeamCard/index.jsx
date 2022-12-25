import React from "react";
import Image from "next/image";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const TeamCard = ({ profession, Name, teamImg }) => {
  return (
    <div className="team_slider relative overflow-hidden duration-200 cursor-pointer mx-[10px] rounded-[5px]">
      <div className="imgCard w-full rounded-[5px] flex">
        <Image src={teamImg} alt="TeamImg1" className="rounded-[5px]" />
      </div>

      <div className="testimo-names absolute bottom-[-50px] left-[10%] z-50 duration-200">
        <Link href="/">
          <a className="text-[24px] font-[600] text-white">
            <h1>{Name}</h1>
          </a>
        </Link>
        <h5 className="text-[18px] font-[500] text-white opacity-[0.8] pt-1">
          {profession}
        </h5>
        {/* Social linls */}
        <SocialLinks />
      </div>
    </div>
  );
};

export function SocialLinks() {
  return (
    <ul className="team-menu grid grid-cols-4 grid-rows-1 gap-2 mt-8">
      <li className="">
        <Link href="/">
          <a className="border-[#ffffff] border-[1px] hover:bg-[#3CC3A3] hover:border-[#3CC3A3] hover:opacity-[1] duration-200 w-10 h-10 rounded-full flex justify-center items-center text-[#fff] opacity-[0.8]">
            <FaFacebookF />
          </a>
        </Link>
      </li>
      <li className="">
        <Link href="/">
          <a className="border-[#ffffff] border-[1px] hover:bg-[#3CC3A3] hover:border-[#3CC3A3] hover:opacity-[1] duration-200 w-10 h-10 rounded-full flex justify-center items-center text-[#fff] opacity-[0.8]">
            <FaTwitter />
          </a>
        </Link>
      </li>
      <li className="">
        <Link href="/">
          <a className="border-[#ffffff] border-[1px] hover:bg-[#3CC3A3] hover:border-[#3CC3A3] hover:opacity-[1] duration-200 w-10 h-10 rounded-full flex justify-center items-center text-[#fff] opacity-[0.8]">
            <FaLinkedin />
          </a>
        </Link>
      </li>
      <li className="">
        <Link href="/">
          <a className="border-[#ffffff] border-[1px] hover:bg-[#3CC3A3] hover:border-[#3CC3A3] hover:opacity-[1] duration-200 w-10 h-10 rounded-full flex justify-center items-center text-[#fff] opacity-[0.8]">
            <FaInstagram />
          </a>
        </Link>
      </li>
    </ul>
  );
}

export default TeamCard;
