import React from "react";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Team from "./pages/Team";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Team />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
