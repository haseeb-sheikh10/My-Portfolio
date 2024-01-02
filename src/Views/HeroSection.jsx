import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import myPic from "../assets/mypic2.png";
import { easeIn, motion } from "framer-motion";
import {
  FaDownload,
  FaGithubAlt,
  FaLinkedinIn,
  FaLongArrowAltDown,
  FaStackOverflow,
} from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { Button } from "@chakra-ui/react";
import CV from "../assets/HaseebIrfanCV.pdf";
import LogoTicker from "./Ticker/LogoTicker";

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
    <div className="hero-section-box flex flex-col justify-between">
      <div className="hero-section flex-1">
        <div className="container mx-auto my-auto grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
          <div className="text-tPrimary w-full my-auto pt-5 lg:pl-24">
            <div className="flex flex-col gap-3 items-center lg:items-start">
              <span className="text-with-gradient">
                <h1 className="text-xl lg:text-3xl font-bold">
                  Hello, it&apos;s Me
                </h1>
              </span>
              <h1 className="text-4xl lg:text-6xl text-center lg:text-left font-bold tracking-widest lg:tracking-widest">
                Haseeb Irfan
              </h1>
              <div className="text-center lg:text-left">
                <span className="text-2xl lg:text-3xl relative font-bold text-tPrimary tracking-widest">
                  I'm a{" "}
                </span>
                <span
                  className="text-2xl lg:text-3xl font-bold cursor-writing text-bgSecondary tracking-widest"
                  ref={typing}
                ></span>
              </div>
              <div className="flex gap-3 items-center mt-3 justify-center lg:justify-start">
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
              </div>
              <a
                className="flex mt-3 justify-center lg:justify-start"
                href={CV}
                download="HaseebIrfanCV"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  leftIcon={<FaDownload />}
                  variant="outline"
                  colorScheme="green"
                >
                  Download CV
                </Button>
              </a>
            </div>
          </div>
          <div className="max-h-[310px] md:max-h-[400px] lg:max-h-full overflow-hidden mx-auto lg:mx-0">
            <svg
              className="h-full"
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
                  width="100%"
                  height="100%"
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
                  width="100%"
                  height="100%"
                  transform="translate(50 50)"
                  strokeWidth="0"
                  style={{ transition: "all 0.3s ease 0s" }}
                  stroke="url(#sw-gradient)"
                ></path>
                <image className="w-24" href={myPic} x="7" y="18" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <LogoTicker />
    </div>
  );
};

export default HeroSection;
