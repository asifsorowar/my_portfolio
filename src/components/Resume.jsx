import React, { useEffect, useState } from "react";
import { getResumes } from "./../service/resumeService";
import { getEducations } from "./../service/educationService";
import { getLanguages } from "./../service/languageService";
import { getAboutDesc } from "./../service/aboutDesc";
import _ from "lodash";

const Resume = () => {
  const [resumes, setResumes] = useState([]);
  const [educations, setEducations] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [about, setAbout] = useState("");

  const loadData = async () => {
    const { data: resumes } = await getResumes();
    setResumes(resumes);

    const { data: educations } = await getEducations();
    const sortedEdus = _.orderBy(educations, "id", "desc");
    setEducations(sortedEdus);

    const { data: languages } = await getLanguages();
    setLanguages(languages);

    const { data: about } = await getAboutDesc();
    setAbout(about);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <section id="resume" className="container section">
      <div className="row">
        <div className="col-md-10">
          <h2 id="resume_header" className="section__title">
            Resume_
          </h2>
          <p
            className="section__description"
            dangerouslySetInnerHTML={{ __html: about.about }}
          ></p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 section__resume resume-list">
          <h3 className="resume-list_title">education</h3>
          {educations.map((edu) => (
            <div key={edu.id} className="resume-list__block">
              <p className="resume-list__block-title">{edu.name} </p>
              <p className="resume-list__block-date">{edu.years}</p>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="row">
        <div className="col-md-8 section__resume resume-list">
          <h3 className="resume-list_title">employment</h3>
          <div className="resume-list__block">
            <p className="resume-list__block-title">Apple</p>
            <p className="resume-list__block-date">2006 - 2010</p>
            <p>Senior Full Stack Developer</p>
          </div>
          <div className="resume-list__block">
            <p className="resume-list__block-title">Tech university</p>
            <p className="resume-list__block-date">2004 - 2005</p>
            <p>
              Awesome developer, lorem ipsum dolor sit amet, conse ctetur
              adipisicing elit, sed do eius- mod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis
            </p>
          </div>
          <div className="resume-list__block">
            <p className="resume-list__block-title">Molly’s studio</p>
            <p className="resume-list__block-date">2003 - 2006</p>
            <p>
              Programmer Lorem ipsum dolor sit amet, consecte tur adipisicing
              elit, sed do eiusmod tempor incididunt ut
            </p>
          </div>
        </div>
      </div> */}
      <div className="row section__resume progress-list js-progress-list">
        <div className="col-md-12">
          <h3 className="progress-list__title">general skills</h3>
        </div>
        {resumes.map((resume) => (
          <div key={resume.id} className="col-md-5 mr-auto">
            <div className="progress-list__skill">
              <p>
                <span className="progress-list__skill-title">
                  {resume.title}
                </span>
                <span className="progress-list__skill-value">
                  {resume.value}%
                </span>
              </p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={resume.value}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row section__resume progress-list js-progress-list">
        <div className="col-md-12">
          <h3 className="progress-list__title">Languages</h3>
        </div>
        {languages.map((language) => (
          <div key={language.id} className="col-md-5 mr-auto">
            <div className="progress-list__skill">
              <p>
                <span className="progress-list__skill-title">
                  {language.title}
                </span>
                <span className="progress-list__skill-value">
                  {language.value}%
                </span>
              </p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={language.value}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resume;
