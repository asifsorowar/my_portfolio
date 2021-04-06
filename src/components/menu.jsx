import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ style, reloadScript, reload }) => {
  return (
    <React.Fragment>
      <div className="menu nav-dark">
        <div className="container">
          <div className="row">
            <div className="menu__wrapper d-none d-lg-block col-md-12">
              <nav className="">
                <ul>
                  <li>
                    <a href="#about" style={{ ...style }}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#resume" style={{ ...style }}>
                      Resume
                    </a>
                  </li>
                  <li>
                    <a href="#portfolio" style={{ ...style }}>
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <Link to="/blog" className="blogNav" style={{ ...style }}>
                      blog
                    </Link>
                  </li>
                  <li>
                    <a href="#contact" style={{ ...style }}>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="menu__wrapper col-md-12 d-lg-none">
              <button type="button" className="menu__mobile-button">
                <span>
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu d-lg-none">
        <div className="container">
          <div className="mobile-menu__close">
            <span>
              <i className="mdi mdi-close" aria-hidden="true"></i>
            </span>
          </div>
          <nav className="mobile-menu__wrapper">
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <Link to="/blog" onClick={() => reloadScript(reload + 1)}>
                  blog
                </Link>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Menu;
