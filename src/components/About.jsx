import React, { useEffect, useState } from "react";
import { getCv } from "./../service/myInfoService";
import { apiUrl } from "../config.json";

const About = () => {
  const [cvUrl, setCvUrl] = useState("");

  const loadData = async () => {
    const {
      data: { cv },
    } = await getCv();
    setCvUrl(cv.url);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <section id="about" className="container section">
      <div className="row">
        <div className="col-md-10">
          <h2 id="hello_header" className="section__title">
            Hi_
          </h2>
          <p className="section__description">
            I am Junior Web developer able to build a Web presence from the
            ground up - from concept, navigation, layout and programming to UX
            and SEO. Skilled at writing well-designed, testable and efficient
            code using current best practices in Web development. Fast learner,
            hard worker and team player who is proficient in an array of
            scripting languages and multimedia Web tools.
          </p>
          <a
            href={apiUrl + cvUrl}
            target="_blank"
            rel="noreferrer"
            className="section_btn site-btn"
          >
            <img src={process.env.PUBLIC_URL + "img/img_btn_icon.png"} alt="" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
