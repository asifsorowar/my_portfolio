import React, { useEffect, useState } from "react";
import { load } from "./utils/loadScript";
import { ToastContainer } from "react-toastify";
import { Switch, Route } from "react-router";
import { useLocation } from "react-router-dom";
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

import {
  getMyInfos,
  getMyProfilePicture,
  getCv,
} from "./service/myInfoService";
import {
  getEmployment,
  getSkillLabels,
  getSkills,
} from "./service/resumeService";
import { getEducations } from "./service/educationService";
import { getAboutDesc } from "./service/aboutDesc";
import _ from "lodash";

import "./components/mainapp.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let [showScroll, setShowScroll] = useState("hidden");
  let [loaded, setLoaded] = useState(false);
  const [info, setInfo] = useState({});
  const [profileP, setProfileP] = useState("");
  const [cv, setCv] = useState(null);

  const [about, setAbout] = useState("");
  const [educations, setEducations] = useState([]);
  const [employments, setEmployments] = useState([]);
  const [skillLabels, setSkillLabels] = useState([]);
  const [skills, setSkills] = useState([]);

  let { pathname } = useLocation();

  const loadData = async () => {
    setLoaded(false);

    const { data: info } = await getMyInfos();
    setInfo(info[0]);
    const { data: image } = await getMyProfilePicture();
    setProfileP(image.picture[0].url);

    const { data: about } = await getAboutDesc();
    setAbout(about.about);

    const { data: educations } = await getEducations();
    const sortedEdus = _.orderBy(educations, "id", "desc");
    setEducations(sortedEdus);

    const { data: employments } = await getEmployment();
    const sortedEmployments = _.orderBy(employments, "id", "desc");
    setEmployments(sortedEmployments);

    const { data: cv } = await getCv();
    setCv(cv);

    const { data: skillLabels } = await getSkillLabels();
    const sortedLabels = _.orderBy(skillLabels, "serial", "asc");
    setSkillLabels(sortedLabels);

    const { data: skills } = await getSkills();
    const shuffledSkills = _.shuffle(skills);
    setSkills(shuffledSkills);

    setLoaded(true);
  };

  useEffect(() => {
    setLoaded(false);
    loadData();
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
            <About cv={cv} info={info} />
            <Resume
              about={about}
              educations={educations}
              employments={employments}
              skillLabels={skillLabels}
              skills={skills}
            />
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
