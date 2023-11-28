import { useState } from "react";
import "./App.css";
import Navbar from "./Views/Navbar";
import "@fontsource-variable/fira-code";
import HeroSection from "./Views/HeroSection";
import LogoTicker from "./Views/Ticker/LogoTicker";

import { inject } from "@vercel/analytics";

const App = () => {
  inject();

  return (
    <>
      <Navbar />
      <section className="section1 mb-10 h-[95vh] flex flex-col">
        <HeroSection />
        {/* <LogoTicker /> */}
      </section>
    </>
  );
};

export default App;
