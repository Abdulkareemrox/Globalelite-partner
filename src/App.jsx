import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
