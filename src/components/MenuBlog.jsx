import React from "react";
import { Link } from "react-router-dom";

const BlogMenu = ({ style }) => {
  return (
    <React.Fragment>
      <div className="menu">
        <div className="container">
          <div className="row">
            <div className="menu__wrapper d-none d-lg-block col-md-12">
              <nav className="">
                <ul>
                  <li>
                    <Link to="/" style={{ ...style }}>
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      style={{
                        ...style,
                        color: "#4a4a4a",
                        textDecoration: "underline",
                      }}
                    >
                      blog
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="menu__wrapper col-md-12 d-lg-none">
              <button
                type="button"
                className="menu__mobile-button"
                style={{ ...style, color: "#4a4a4a" }}
              >
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
                <Link to="/" style={{ ...style }}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" style={{ ...style, color: "#4a4a4a" }}>
                  blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogMenu;
