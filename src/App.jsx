import "./App.css";
import Navbar from "./Views/Navbar";
import "@fontsource-variable/fira-code";
import HeroSection from "./Views/HeroSection";
import React from "react";

import { inject } from "@vercel/analytics";
import Sidebar from "./Views/Projects/Sidebar";
import Projects from "./Views/Projects/Projects";
import Skills from "./Views/Projects/Skills";
import Timeline from "./Views/Timeline/Timeline";
import TerminalBox from "./Views/Contact/TerminalBox";

const App = () => {
  inject();

  return (
    <>
      <Navbar />
      <section className="section1">
        <HeroSection />
      </section>
      <section id="projects" className="my-12 md:my-24">
        <Projects />
      </section>
      <section id="skills" className="my-12 md:my-24">
        <Skills />
      </section>
      <section id="timeline" className="my-12 md:my-24">
        <Timeline />
      </section>
      <section id="contact" className="my-12 md:my-24">
        <TerminalBox />
      </section>
    </>
  );
};

export default App;
