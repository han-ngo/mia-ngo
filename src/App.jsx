import React, { useEffect, useState, Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Experience from "./components/experience/Experience";
import Education from "./components/experience/Education";
import Portfolio from "./components/portfolio/Portfolio";
import Pricing from "./components/pricing/Pricing";
import Testimonials from "./components/testimonials/Testimonials";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  return (
    <>
      <div className={`${darkMode ? "dark" : ""}`}>
        <Sidebar
          className="dark:bg-[#282A36]"
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        {/* </div> */}
        <main className="main dark:bg-[#44475A]">
          <Home darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Experience darkMode={darkMode} />
          <Education darkMode={darkMode} />
          <Portfolio darkMode={darkMode} />
          {/* <Services darkMode={darkMode} /> */}
          {/* <Pricing darkMode={darkMode} /> */}
          {/* <Testimonials darkMode={darkMode} /> */}
          {/* <Blog darkMode={darkMode} /> */}
          <Contact darkMode={darkMode} />
        </main>
      </div>
    </>
  );
};

export default App;
