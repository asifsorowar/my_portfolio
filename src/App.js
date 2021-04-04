import React, { useEffect, useState } from "react";
import { load } from "./utils/loadScript";
import { ToastContainer } from "react-toastify";
import SEO from "./components/seo";
import Menu from "./components/menu";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ScrollButton from "./components/scrollButton";
import "./components/mainapp.css";

function App() {
  let [showScroll, setShowScroll] = useState("hidden");
  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 1300) return setShowScroll("visible");
      else return setShowScroll("hidden");
    });
  }, [showScroll]);

  console.log(showScroll);
  return (
    <div>
      <ScrollButton show={showScroll} />
      <Menu />
      <ToastContainer />
      <SEO title="Home" />
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
