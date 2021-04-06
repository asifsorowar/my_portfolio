import React, { useEffect, useState } from "react";
import { load } from "./utils/loadScript";
import { ToastContainer } from "react-toastify";
import { Switch, Route } from "react-router";
import SEO from "./components/seo";
import Menu from "./components/menu";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ScrollButton from "./components/scrollButton";
import BlogMenu from "./components/MenuBlog";
import Loader from "react-loader";
import Blog from "./components/Blog";
import { getMyInfos, getMyProfilePicture } from "./service/myInfoService";
import { useLocation } from "react-router-dom";
import "./components/mainapp.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let [showScroll, setShowScroll] = useState("hidden");
  let [loaded, setLoaded] = useState(false);
  const [info, setInfo] = useState({});
  const [profileP, setProfileP] = useState("");
  let { pathname } = useLocation();

  const loadHeaderData = async () => {
    const { data: info } = await getMyInfos();
    setInfo(info[0]);
    const { data: image } = await getMyProfilePicture();
    setProfileP(image.picture[0].url);
  };

  useEffect(() => {
    setLoaded(false);
    loadHeaderData();
  }, []);

  useEffect(() => {
    load();
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 1300) return setShowScroll("visible");
      else return setShowScroll("hidden");
    });
  }, [showScroll]);

  return (
    <>
      <ToastContainer />
      <Loader
        loaded={loaded}
        className="spinner"
        opacity={0.5}
        options={{
          scale: 6,
          top: "50%",
          left: "50%",
        }}
      />
      <div>
        <ScrollButton show={showScroll} />
        <Switch>
          <Route exact path="/">
            <SEO title="Home" />
            <Menu />
            <Header info={info} profileP={profileP} setLoaded={setLoaded} />
            <About />
            <Resume />
            <Portfolio />
            <Contact />
          </Route>
          <Route path="/blog">
            <SEO title="Blog" />
            <BlogMenu style={{ color: "darkgray" }} />
            <Blog setLoaded={setLoaded} />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
