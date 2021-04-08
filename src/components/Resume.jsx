import React, { useEffect, useState } from "react";
import {
  getResumes,
  getOtherSkills,
  getEmployment,
} from "./../service/resumeService";
import { getEducations } from "./../service/educationService";
import { getLanguages } from "./../service/languageService";
import { getAboutDesc } from "./../service/aboutDesc";
import _ from "lodash";

const Resume = () => {
  const [resumes, setResumes] = useState([]);
  const [educations, setEducations] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [otherSkills, setOtherSkills] = useState([]);
  const [employments, setEmployments] = useState([]);
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

    const { data: otherSkills } = await getOtherSkills();
    setOtherSkills(otherSkills);

    const { data: employments } = await getEmployment();
    const sortedEmployments = _.orderBy(employments, "id", "desc");
    setEmployments(sortedEmployments);
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
      {employments.length > 0 && (
        <div className="row">
          <div className="col-md-8 section__resume resume-list">
            <h3 className="resume-list_title">employment</h3>
            {employments.map((employment) => (
              <div className="resume-list__block" key={employment.id}>
                <p className="resume-list__block-title">{employment.name}</p>
                <p className="resume-list__block-date">{employment.years}</p>
                <p>{employment.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="row section__resume progress-list js-progress-list">
        <div className="col-md-12">
          <h3 className="progress-list__title">Programming Languages</h3>
        </div>
        {languages.map((language) => (
          <div key={language.id} className="col-md-5 mr-auto">
            <div className="progress-list__skill">
              <p>
                <span className="progress-list__skill-title">
                  {language.title}
                </span>
                <span
                  className="progress-list__skill-value"
                  style={{ fontSize: "11px" }}
                >
                  {language.skill_level?.level}
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

      <div className="row section__resume progress-list js-progress-list">
        <div className="col-md-12">
          <h3 className="progress-list__title">Programming related skills</h3>
        </div>
        {resumes.map((resume) => (
          <div key={resume.id} className="col-md-5 mr-auto">
            <div className="progress-list__skill">
              <p>
                <span className="progress-list__skill-title">
                  {resume.title}
                </span>
                <span
                  className="progress-list__skill-value"
                  style={{ fontSize: "11px" }}
                >
                  {resume.skill_level?.level}
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
          <h3 className="progress-list__title">Other skills</h3>
        </div>
        {otherSkills.map((skill) => (
          <div key={skill.id} className="col-md-5 mr-auto">
            <div className="progress-list__skill">
              <p>
                <span className="progress-list__skill-title">
                  {skill.title}
                </span>
                <span className="progress-list__skill-value">
                  {skill.value}%
                </span>
              </p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={skill.value}
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
