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
import "./components/mainapp.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let [showScroll, setShowScroll] = useState("hidden");
  let [scriptReset, setScriptReset] = useState(0);
  let [loaded, setLoaded] = useState(false);
  const [info, setInfo] = useState({});
  const [profileP, setProfileP] = useState("");

  const loadHeaderData = async () => {
    const { data: info } = await getMyInfos();
    setInfo(info[0]);
    const { data: image } = await getMyProfilePicture();
    setProfileP(image.picture[0].url);
  };

  useEffect(() => {
    setLoaded(false);
    load();
    loadHeaderData();
    setLoaded(true);
  }, []);

  useEffect(() => {
    load();
  }, [scriptReset]);

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
        options={{ scale: 8 }}
      />
      {loaded && (
        <div>
          <ScrollButton show={showScroll} />
          <Switch>
            <Route exact path="/">
              <SEO title="Home" />
              <Menu reloadScript={setScriptReset} reload={scriptReset} />
              <Header info={info} profileP={profileP} />
              <About />
              <Resume />
              <Portfolio />
              <Contact />
            </Route>
            <Route path="/blog">
              <SEO title="Blog" />
              <BlogMenu
                style={{ color: "darkgray" }}
                reloadScript={setScriptReset}
                reload={scriptReset}
              />
              <Blog />
            </Route>
          </Switch>
        </div>
      )}
    </>
  );
}

export default App;