import React, { useEffect, useState } from "react";
import { getCatagories, getProjects } from "./../service/projectsService";
import PortfolioModal from "./PortfolioModal";
import _ from "lodash";

const Portfolio = () => {
  const [projectCategories, setProjectCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const loadData = async () => {
    const { data: categories } = await getCatagories();
    setProjectCategories([{ name: "All" }, ...categories]);
    const { data: projects } = await getProjects();
    const shuffledProjects = _.shuffle(projects);
    setProjects(shuffledProjects);
  };

  useEffect(() => {
    loadData();
  }, []);

  const getFilteredProjects = () => {
    let filteredProject;
    if (selectedCategory && selectedCategory.id)
      filteredProject = projects.filter(
        (project) => project.project_catergory.id === selectedCategory.id
      );
    else filteredProject = projects;

    return filteredProject;
  };

  const setActive = (category) =>
    category === selectedCategory ? "#373838" : "#868e96";

  return (
    <>
      <section id="portfolio" className="container section">
        <div className="row">
          <div className="col-md-12">
            <h2 id="portfolio_header" className="section__title">
              My projects_
            </h2>
          </div>
        </div>
        <div className="row portfolio-menu">
          <div className="col-md-12">
            <nav>
              <ul>
                {projectCategories.map((category) => (
                  <li key={category.id || category.name}>
                    <span
                      style={{
                        color: setActive(category),
                      }}
                      className="portfolioSpan"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category.name}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className="portfolio-cards" style={{ transition: "all 0.10s" }}>
          {getFilteredProjects().map((project) => (
            <div
              className="row project-card"
              data-toggle="modal"
              data-target="#portfolioModal"
              key={project.id}
              onClick={() => setSelectedProject(project)}
            >
              <div className="col-md-6 col-lg-5 project-card__img">
                <img className="" src={project.image.url} alt="project-img" />
              </div>
              <div className="col-md-6 col-lg-7 project-card__info">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.desc}</p>
                <p className="project-card__stack">Used stack:</p>
                <ul className="tags">
                  {project.used_stacks.map((stack) => (
                    <li key={stack.id}>{stack.name}</li>
                  ))}
                </ul>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card__link"
                >
                  {project.url}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      {selectedProject && (
        <PortfolioModal
          project={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      )}
    </>
  );
};

export default Portfolio;
