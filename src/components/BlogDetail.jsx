import React from "react";
import { apiUrl } from "../config.json";

const BlogDetail = ({ blog, setBlog }) => {
  return (
    <div
      className="modal fade portfolio-modal"
      id="blogModal"
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
              onClick={() => setBlog(null)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body col-md-11 col-lg-9 ml-auto mr-auto">
            <div className="article">
              <p className="article__title">{blog.title}</p>
              <p className="article_date">
                {new Date(blog.published_at).toDateString()}
              </p>
              <p>{blog.desc.substr(0, 160)}</p>
              <figure>
                <img
                  className=""
                  src={apiUrl + blog.image[0].url}
                  alt="blog_image"
                />
                <figcaption>{blog.figCaption}</figcaption>
              </figure>
              <p>{blog.desc.substr(161)}</p>
              <p className="article__share">
                Share this post:
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-linkedin-square"></i>
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-facebook-square"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
