import "./App.css";
import Navbar from "./Views/Navbar";
import "@fontsource-variable/fira-code";
import HeroSection from "./Views/HeroSection";
import React from "react";

import { inject } from "@vercel/analytics";
import Sidebar from "./Views/Projects/Sidebar";
import Projects from "./Views/Projects/Projects";

const App = () => {
  inject();

  return (
    <>
      <Navbar />
      <section className="">
        <HeroSection />
      </section>
      <section id="section2" className="mb-10">
        <Projects />
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
