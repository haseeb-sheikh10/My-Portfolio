import { useState } from "react";
import "./App.css";
import Navbar from "./Views/Navbar";
import "@fontsource-variable/fira-code";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="100vh">
        <Navbar />
      </div>
    </>
  );
}

export default App;
