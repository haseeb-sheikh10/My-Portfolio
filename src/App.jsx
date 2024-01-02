import "@fontsource-variable/fira-code";
import "./App.css";
import HeroSection from "./Views/HeroSection";
import Navbar from "./Views/Navbar";

import { inject } from "@vercel/analytics";
import TerminalBox from "./Views/Contact/TerminalBox";
import Footer from "./Views/Footer";
import Projects from "./Views/Projects/Projects";
import Skills from "./Views/Projects/Skills";
import Timeline from "./Views/Timeline/Timeline";
import { useColorMode } from "@chakra-ui/react";

const App = () => {
  inject();

  const { colorMode } = useColorMode();
  return (
    <div
      style={{
        "--text-color": colorMode === "light" ? "#1f2733" : "#eae6e5",
        "--gray-text-color":
          colorMode === "light"
            ? "hsl(0 0% 100% / 0.2)"
            : "hsl(0 0% 100% / 0.2)",
      }}
    >
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
      <Footer />
    </div>
  );
};

export default App;
