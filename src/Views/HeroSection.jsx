import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import myPic from "../assets/mypic2.png";
import { easeIn, motion } from "framer-motion";
import {
  FaGithubAlt,
  FaLinkedinIn,
  FaLongArrowAltDown,
  FaStackOverflow,
} from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";

const HeroSection = () => {
  const typing = useRef(null);

  useEffect(() => {
    const typed = new Typed(typing.current, {
      strings: [
        "Frontend Developer ^1000",
        "Web Designer ^500",
        "Freelancer ^500",
      ],
      typeSpeed: 30,
      backSpeed: 20,
      loop: true,
      loopCount: Infinity,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="hero-section flex-1 h-[90vh]">
      <div className="container mx-auto my-auto h-full grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 place-content-center">
        <div className="mx-auto my-auto w-full px-5 md:py-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="flex flex-col gap-3 font-display "
          >
            <h1 className="text-2xl lg:text-3xl text-center lg:text-left font-bold">
              Hello, it's Me
            </h1>
            <h1 className="text-5xl lg:text-6xl text-center lg:text-left font-bold tracking-widest lg:tracking-widest">
              Haseeb Irfan
            </h1>
            <div className="min-w-[300px] text-center lg:text-left">
              <span className="text-2xl lg:text-4xl relative font-bold text-tPrimary tracking-widest">
                I'm a{" "}
              </span>
              <span
                className="text-2xl lg:text-4xl font-bold cursor-writing text-bgSecondary tracking-widest"
                ref={typing}
              ></span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="flex gap-3 items-center mt-5 justify-center lg:justify-start"
          >
            <a
              href="#"
              target="_blank"
              className="cursor-pointer rounded-md text-tPrimary hover:bg-bgSecondary hover:text-black hover:opacity-80 transition-colors ease-in p-2"
            >
              <FaGithubAlt className="text-2xl" />
            </a>
            <a
              href="#"
              target="_blank"
              className="cursor-pointer rounded-md text-tPrimary hover:bg-bgSecondary hover:text-black hover:opacity-80 transition-colors ease-in p-2"
            >
              <FaLinkedinIn className="text-2xl" />
            </a>
            <a
              href="#"
              target="_blank"
              className="cursor-pointer rounded-md text-tPrimary hover:bg-bgSecondary hover:text-black hover:opacity-80 transition-colors ease-in p-2"
            >
              <TbBrandFiverr className="text-2xl" />
            </a>
            <a
              href="#"
              target="_blank"
              className="cursor-pointer rounded-md text-tPrimary hover:bg-bgSecondary hover:text-black hover:opacity-80 transition-colors ease-in p-2"
            >
              <FaStackOverflow className="text-2xl" />
            </a>
            <button class="Btn">
              <svg
                class="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span class="icon2"></span>
              <span class="tooltip">Download CV</span>
            </button>
          </motion.div>
          <motion.div className="mt-10 relative"></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2 }}
            className="flex justify-center lg:justify-start"
          >
            <a href="#section2" className="animate-bounce">
              <div className="w-12 h-12 mt-10 shadow-sm shadow-bgPrimary rounded-full bg-black">
                <span className="flex justify-center items-center h-full">
                  <FaLongArrowAltDown
                    size="30px"
                    className="text-bgSecondary h-fit"
                  />
                </span>
              </div>
            </a>
          </motion.div>
        </div>
        <div className="px-5 overflow-hidden">
          {/* <svg
            className="max-w-full"
            id="sw-js-blob-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <defs>
              {" "}
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                {" "}
                <stop
                  id="stop1"
                  stopColor="rgba(91, 146, 121, 1)"
                  offset="0%"
                ></stop>{" "}
                <stop
                  id="stop2"
                  stopColor="rgba(143, 203, 155, 1)"
                  offset="100%"
                ></stop>{" "}
              </linearGradient>{" "}
            </defs>{" "}
            <mask id="mask1">
              <path
                fill="url(#sw-gradient)"
                d="M21.3,-32.3C28.3,-28.7,35.2,-23.9,39.3,-17.3C43.4,-10.6,44.7,-2,42,4.9C39.2,11.8,32.3,16.9,26.2,21.2C20.1,25.4,14.8,28.7,8.9,30.7C2.9,32.7,-3.5,33.4,-10,32.3C-16.5,31.2,-22.9,28.3,-26.8,23.4C-30.7,18.6,-32.1,11.7,-31.7,5.4C-31.4,-1,-29.4,-6.7,-26.8,-12.2C-24.3,-17.7,-21.2,-23,-16.6,-27.7C-12.1,-32.4,-6,-36.6,0.6,-37.5C7.2,-38.3,14.3,-35.9,21.3,-32.3Z"
                // width="100%"
                // height="100%"
                transform="translate(50 50)"
                strokeWidth="0"
                style={{ transition: "all 0.3s ease 0s" }}
                stroke="url(#sw-gradient)"
              ></path>
            </mask>
            <g mask="url(#mask1)">
              <path
                fill="url(#sw-gradient)"
                d="M21.3,-32.3C28.3,-28.7,35.2,-23.9,39.3,-17.3C43.4,-10.6,44.7,-2,42,4.9C39.2,11.8,32.3,16.9,26.2,21.2C20.1,25.4,14.8,28.7,8.9,30.7C2.9,32.7,-3.5,33.4,-10,32.3C-16.5,31.2,-22.9,28.3,-26.8,23.4C-30.7,18.6,-32.1,11.7,-31.7,5.4C-31.4,-1,-29.4,-6.7,-26.8,-12.2C-24.3,-17.7,-21.2,-23,-16.6,-27.7C-12.1,-32.4,-6,-36.6,0.6,-37.5C7.2,-38.3,14.3,-35.9,21.3,-32.3Z"
                // width="100%"
                // height="100%"
                transform="translate(50 50)"
                strokeWidth="0"
                style={{ transition: "all 0.3s ease 0s" }}
                stroke="url(#sw-gradient)"
              ></path>
              <image className="w-24" href={myPic} x="7" y="18" />
            </g>
          </svg> */}
          <img className="w-10/12" src={myPic} alt="Haseeb Irfan" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
