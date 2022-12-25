import React, { useEffect, useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";

const TopButton = () => {
  const [isActive, setIsActive] = useState(false);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const LitsenScroll = () => {
    let scrollHeight = 300;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > scrollHeight) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", LitsenScroll);
    return () => window.removeEventListener("scroll", LitsenScroll);
  }, []);
  return (
    <div>
      {isActive ? (
        <button
          className="px-3 py-3 rounded-full text-white bg-[#3CC3A3] fixed right-7 bottom-7 duration-500 z-[999999999999]"
          onClick={goToTop}
          id="btn"
        >
          <BsArrowUpShort className="text-[40px] animate-bounce relative top-[5px]" />
        </button>
      ) : (
        <button
          className="px-3 py-3 rounded-full text-white bg-[#3CC3A3] fixed right-7 bottom-[-20%] duration-500"
          onClick={goToTop}
          id="btn"
        >
          <BsArrowUpShort className="text-[40px] animate-bounce relative top-[5px]" />
        </button>
      )}
    </div>
  );
};

export default TopButton;
