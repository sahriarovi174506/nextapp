import React, { useEffect, useState } from "react";
import { Navbar } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/Hero-section/logo-folioedge.png";

export default function Navbars() {
  const [isColorNav, setIsColorNav] = useState(false);
  const [isMenuToggled, setMenuToggled] = useState(false);

  // scroll
  function LitsenScrolling() {
    let scrollH = 150;
    const scrollBy =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollBy < scrollH) {
      setIsColorNav(!isColorNav);
    } else {
      setIsColorNav(isColorNav);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", LitsenScrolling);
    return () => window.removeEventListener("scroll", LitsenScrolling);
  }, []);

  return (
    <Navbar
      className={
        !isColorNav
          ? "nav-bar rounded-none scroll border-[0] bg-[#ffffff30] fixed top-0 left-0 z-10 before:bg-[#ffffff] w-[100%] duration-500 before:z-[-9999] before:content-[''] before:w-full before:h-[100%] before:absolute before:left-0 before:top-[0] before:duration-300"
          : "nav-bar rounded-none fixed border-l-0 border-t-0 border-r-0 border-b-[1px] border-b-[#ffffff] bg-[#ffffff30] top-0 left-0 z-10 w-[100%] duration-500 before:bg-[#ffffff30] before:z-[-9999] before:content-[''] before:w-full before:h-[0] before:absolute before:left-[0] before:top-[-30px] before:duration-300"
      }
    >
      <div className="sm:w-[90%] w-[100%] sm:px-0 px-5 mx-auto h-24 relative">
        <nav className="flex justify-between items-center h-[100%]">
          {/* logo */}
          <Link href="/">
            <a>
              <div className="logo">
                <Image
                  alt="Mountains"
                  objectFit="contain"
                  src={Logo}
                  className="md:w-[100%] w-[120px]"
                />
              </div>
            </a>
          </Link>

          {/* Menus */}
          <div
            className={
              isMenuToggled ? "primary-menu mobile-menu" : "primary-menu"
            }
          >
            <ul className="flex items-center h-24">
              <li className="h-24 mx-[20px] flex items-center before:content-[''] before:absolute relative before:w-[100%] before:bg-[#3CC3A3] before:h-[2px] before:left-0 before:bottom-[20px] before:opacity-0 hover:before:opacity-[1] hover:before:bottom-[0] before:duration-300">
                <Link href="/">
                  <a className="text-[18px] text-[#000] font-[400] hover:text-[#3CC3A3] duration-300">
                    Home
                  </a>
                </Link>
              </li>
              <li className="h-24 mx-[20px] flex items-center before:content-[''] before:absolute relative before:w-[100%] before:bg-[#3CC3A3] before:h-[2px] before:left-0 before:bottom-[20px] before:opacity-0 hover:before:opacity-[1] hover:before:bottom-[0] before:duration-300">
                <Link href="/about">
                  <a className="text-[18px] text-[#000] font-[400] hover:text-[#3CC3A3] duration-300">
                    About
                  </a>
                </Link>
              </li>
              <li className="h-24 mx-[20px] flex items-center before:content-[''] before:absolute relative before:w-[100%] before:bg-[#3CC3A3] before:h-[2px] before:left-0 before:bottom-[20px] before:opacity-0 hover:before:opacity-[1] hover:before:bottom-[0] before:duration-300">
                <Link href="/">
                  <a className="text-[18px] text-[#000] font-[400] hover:text-[#3CC3A3] duration-300">
                    Service
                  </a>
                </Link>
              </li>
              <li className="h-24 mx-[20px] flex items-center before:content-[''] before:absolute relative before:w-[100%] before:bg-[#3CC3A3] before:h-[2px] before:left-0 before:bottom-[20px] before:opacity-0 hover:before:opacity-[1] hover:before:bottom-[0] before:duration-300">
                <Link href="/">
                  <a className="text-[18px] text-[#000] font-[400] hover:text-[#3CC3A3] duration-300">
                    Blog
                  </a>
                </Link>
              </li>
              <li className="h-24 mx-[20px] flex items-center before:content-[''] before:absolute relative before:w-[100%] before:bg-[#3CC3A3] before:h-[2px] before:left-0 before:bottom-[20px] before:opacity-0 hover:before:opacity-[1] hover:before:bottom-[0] before:duration-300">
                <Link href="/">
                  <a className="text-[18px] text-[#000] font-[400] hover:text-[#3CC3A3] duration-300">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Button */}
          <div className="flex items-center">
            <button className="p-0 rounded-[0px] sm:block hidden mr-5">
              <Link href="/">
                <a className="bg-[#10131F] py-[15px] px-[28px] text-white block rounded font-[700] text-[18px] hover:shadow-xl hover:bg-white duration-300 hover:text-[#10131F]">
                  Download CV
                </a>
              </Link>
            </button>

            {/* hamburger */}
            <div
              className={
                isMenuToggled
                  ? "hamburger hamburger_cliked relative right-0 w-8 h-5 cursor-pointer flex justify-center items-center"
                  : "hamburger relative right-0 w-8 h-5 cursor-pointer flex justify-center items-center"
              }
              onClick={() => setMenuToggled(!isMenuToggled)}
            >
              <span className="w-8 h-1 bg-[#3DC2A0] absolute top-0 rounded-full"></span>
              <span className="w-8 h-1 bg-[#3DC2A0] absolute translate-y-[-50%] top-[50%] rounded-full"></span>
              <span className="w-8 h-1 bg-[#3DC2A0] absolute bottom-0 rounded-full"></span>
            </div>
          </div>
        </nav>
      </div>
    </Navbar>
  );
}
