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
      <section className="section1 mb-10 flex flex-col justify-between">
        <HeroSection />
        <LogoTicker />
      </section>
      <section id="section2" className="section2">
        section2
      </section>
      <section className="section3">section3</section>
      <section className="section4">section4</section>
      <section className="section5">section5</section>
      <section className="section6">section6</section>
    </>
  );
};

export default App;
