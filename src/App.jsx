import { useState } from "react";
import "./App.css";
import Navbar from "./Views/Navbar";
import "@fontsource-variable/fira-code";
import HeroSection from "./Views/HeroSection";
import LogoTicker from "./Views/Ticker/LogoTicker";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="">
        <section className="hero-section relative">
          <HeroSection />
          <LogoTicker />
        </section>
        <section>section2</section>
        <section>section3</section>
        <section>section4</section>
      </div>
    </>
  );
}

export default App;
