import { useState } from "react";
import "./App.css";
import Navbar from "./Views/Navbar";
import "@fontsource-variable/fira-code";
import HeroSection from "./Views/HeroSection";
import LogoTicker from "./Views/Ticker/LogoTicker";
import React from "react";

import { inject } from "@vercel/analytics";
import Parallax from "./Views/Parallax";

const App = () => {
  inject();

  return (
    <>
      <Navbar />
      <section className="mb-10 flex flex-col justify-between">
        <HeroSection />
        <LogoTicker />
      </section>
      <section id="section2" className="mb-10 pt-5">
        <Parallax />
      </section>
      <section id="section3" className="section3">
        section3
      </section>
      <section className="section4">section4</section>
      <section className="section5">section5</section>
      <section className="section6">section6</section>
    </>
  );
};

export default App;
