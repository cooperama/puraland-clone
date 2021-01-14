import React from "react";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Team from "./pages/Team";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
