import React, { useEffect, useRef, useState } from "react";
import reactLogo from "../../assets/Logos/structure.png";
import jsLogo from "../../assets/Logos/js.png";
import tsLogo from "../../assets/Logos/typescript.png";
import htmlLogo from "../../assets/Logos/html-5.png";
import cssLogo from "../../assets/Logos/css-3.png";
import tailwindLogo from "../../assets/Logos/Tailwind-CSS.png";
import pythonLogo from "../../assets/Logos/python.png";
import antDesign from "../../assets/Logos/antdesign.png";
import cLogo from "../../assets/Logos/c++.png";
import chakra from "../../assets/Logos/chakra.png";
import git from "../../assets/Logos/git.png";
import github from "../../assets/Logos/github.png";
import materialUi from "../../assets/Logos/materialui.png";
import mongoDb from "../../assets/Logos/mongodb.png";
import mySql from "../../assets/Logos/mysql.png";
import nodejs from "../../assets/Logos/nodejs.png";
import psql from "../../assets/Logos/psql.png";
import angular from "../../assets/Logos/angular.png";

import "./Ticker.css";
import { motion } from "framer-motion";

const LogoTicker = () => {
  const tickerRef = useRef(null);
  const sliderRef = useRef(null);

  const [dataAnimated, setDataAnimated] = useState(false);

  useEffect(() => {
    const addAnimation = () => {
      if (tickerRef.current && sliderRef.current) {
        setDataAnimated(true);
        const scrollContent = Array.from(sliderRef.current.children);

        scrollContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          sliderRef.current.appendChild(duplicatedItem);
        });
      }
    };

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  return (
    <div className="ticker py-5" ref={tickerRef} data-animated={dataAnimated}>
      <div className="logo-slider" ref={sliderRef}>
        <img src={reactLogo} alt="React" />
        <img src={angular} alt="Angular" />
        <img src={jsLogo} alt="Javascript" />
        <img src={tsLogo} alt="Typescript" />
        <img src={pythonLogo} alt="Python" />
        <img src={cLogo} alt="C++" />
        <img src={htmlLogo} alt="HTML5" />
        <img src={cssLogo} alt="CSS3" />
        <img src={tailwindLogo} alt="Tailwind" />
        <img src={materialUi} alt="Material UI" />
        <img src={chakra} alt="Chakra UI" />
        <img src={antDesign} alt="Ant Design" />
        <img src={git} alt="Git" />
        <img src={github} alt="Github" />
        <img src={mySql} alt="MySql" />
        <img src={psql} alt="Postgresql" />
        <img src={mongoDb} alt="MongoDB" />
        <img src={nodejs} alt="NodeJS" />
      </div>
    </div>
  );
};

export default LogoTicker;
