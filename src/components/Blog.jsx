import React, { useState, useEffect } from "react";
import { loadBlogs } from "./../service/blogService";
import BlogDetail from "./BlogDetail";
import _ from "lodash";

const Blog = ({ setLoaded }) => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const loadData = async () => {
    const { data: blogs } = await loadBlogs();
    const latestBlogs = _.orderBy(blogs, "published_at", "desc");
    setBlogs(latestBlogs);
  };

  useEffect(() => {
    setLoaded(false);
    loadData();
    setLoaded(true);
  }, [blogs]);

  const shortText = (desc) => {
    return desc.substr(0, 120) + ".....";
  };

  return (
    <>
      <section
        id="blog"
        className="container section "
        data-toggle="modal"
        data-target="#blogModal"
        data-portfolio-tag="landing-pages"
        style={{ marginTop: "40px" }}
      >
        <div className="row">
          <div className="col-md-12">
            <h2 id="blog_header" className="section__title">
              Latest Posts_
            </h2>
          </div>
        </div>

        <div className="row post-cards">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="col-md-4"
              onClick={() => setSelectedBlog(blog)}
            >
              <div className="post-cards__card">
                <div className="post-cards__img">
                  <img
                    src={process.env.REACT_APP_API_URL + blog.image[0]?.url}
                    alt="blog_img"
                  />
                </div>
                <div className="post-cards__info">
                  <p className="post-cards__date">
                    {new Date(blog.published_at).toDateString()}
                  </p>
                  <h3 className="post-cards_title">{blog.title}</h3>
                  <p className="post-cards_description">
                    {shortText(blog.desc)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {selectedBlog && (
        <BlogDetail setBlog={setSelectedBlog} blog={selectedBlog} />
      )}
    </>
  );
};

export default Blog;
