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
      <div className="">
        <section className="section1 pt-16 flex flex-col justify-between">
          <HeroSection />
          <LogoTicker />
        </section>
        <section id="section2" className="pt-16">
          section2
        </section>
        <section>section3</section>
        <section>section4</section>
      </div>
    </>
  );
};

export default App;
