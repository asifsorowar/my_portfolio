import React, { useEffect } from "react";
import { load } from "./utils/loadScript";
import SEO from "./components/seo";
import Menu from "./components/menu";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./components/mainapp.css";

function App() {
  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <Menu />
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
