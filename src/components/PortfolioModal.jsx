import React from "react";

const PortfolioModal = ({ project, setSelectedProject }) => {
  return (
    <div
      className="modal fade portfolio-modal"
      id="portfolioModal"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => setSelectedProject(null)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body col-md-11 col-lg-9 ml-auto mr-auto">
            <p className="portfolio-modal__title">{project.name}</p>
            <img
              className="portfolio-modal__img"
              src={project.image.url}
              alt="modal_img"
            />
            <p className="portfolio-modal__description">{project.desc}</p>
            <div className="portfolio-modal__link">
              <a href={project.url} target="_blank" rel="noreferrer">
                {project.url}
              </a>
            </div>
            <div className="portfolio-modal__stack">
              <p className="portfolio-modal__stack-title">Using stack:</p>
              <ul className="tags">
                {project.used_stacks.map((stack) => (
                  <li key={stack.id}>{stack.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
