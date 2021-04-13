import React from "react";

const Resume = ({ about, educations, employments, skillLabels, skills }) => {
  const getFilteredSkills = (skillLabel) => {
    const filteredSkills = skills.filter(
      (skill) => skill.skill_label.id === skillLabel.id
    );
    return filteredSkills;
  };

  return (
    <>
      <section id="resume" className="container section">
        <div className="row">
          <div className="col-md-10">
            <h2 id="resume_header" className="section__title">
              Resume_
            </h2>
            <p
              className="section__description"
              dangerouslySetInnerHTML={{ __html: about }}
            ></p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 section__resume resume-list">
            <h3 className="resume-list_title">education</h3>
            {educations.map((edu) => (
              <div key={edu.id} className="resume-list__block">
                <p className="resume-list__block-title" data-aos="flip-up">
                  {edu.name}{" "}
                </p>
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
                  <p className="resume-list__block-title" data-aos="flip-up">
                    {employment.name}
                  </p>
                  <p className="resume-list__block-date">{employment.years}</p>
                  <p>{employment.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {skillLabels.map((skillLabel) => (
          <div
            key={skillLabel.id}
            className="row section__resume progress-list js-progress-list"
          >
            <div className="col-md-12">
              <h3 className="progress-list__title">{skillLabel.label}</h3>
            </div>
            {getFilteredSkills(skillLabel).map((skill) => (
              <div key={skill.id} className="col-md-5 mr-auto">
                <div className="progress-list__skill">
                  <p data-aos="fade-zoom-in">
                    <span className="progress-list__skill-title">
                      {skill.title}
                    </span>
                    <span
                      className="progress-list__skill-value"
                      style={{ fontSize: "11px" }}
                    >
                      {skillLabel.isSkillLevel
                        ? skill.skill_level?.level
                        : skill.value + "%"}
                    </span>
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      data-aos="slide-right"
                      data-aos-once="true"
                      role="progressbar"
                      aria-valuenow={skill.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        width: `${skill.value}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    </>
  );
};

export default Resume;
