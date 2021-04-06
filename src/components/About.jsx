import React, { useEffect, useState } from "react";
import { getCv } from "./../service/myInfoService";
import { getMyInfos } from "../service/myInfoService";

const About = () => {
  const [cv, setCv] = useState(null);
  const [info, setInfo] = useState(null);

  const loadData = async () => {
    const { data: cv } = await getCv();

    const { data: info } = await getMyInfos();
    setCv(cv);
    setInfo(info[0]);
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
          <p className="section__description">{info?.about_me}</p>
          <a
            href={cv?.url}
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
