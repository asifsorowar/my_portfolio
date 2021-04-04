import React, { useState, useEffect } from "react";
import { getMyInfos } from "./../service/myInfoService";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [info, setInfo] = useState(null);

  const loadData = async () => {
    const { data: info } = await getMyInfos();
    setInfo(info[0]);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <div
      className="background"
      style={{ backgroundImage: "url(assets/img/img_bg_main.jpg)" }}
    >
      <div id="contact" className="container section">
        <div className="row">
          <div className="col-md-12">
            <p id="contacts_header" className="section__title">
              Get in touch_
            </p>
          </div>
        </div>
        <div className="row contacts">
          <div className="col-md-5 col-lg-4">
            <div className="contacts__list">
              <dl className="contact-list">
                <dt>Phone:</dt>
                <dd>
                  <a href={"tel:" + info?.phone}>{info?.phone}</a>
                </dd>
                <dt>Skype:</dt>
                <dd>
                  <a href={info?.skype ? "skype:" + info?.skype : "#contact"}>
                    {info?.skype ? info?.skype : "not available"}
                  </a>
                </dd>
                <dt>Email:</dt>
                <dd>
                  <a href={"mailto:" + info?.email}>{info?.email}</a>
                </dd>
              </dl>
            </div>
            <div className="contacts__social">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/asif.oyen"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/asif-sorowar-222609168"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/asifsorowar"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/asif_oyen"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-7 col-lg-5">
            <div className="contacts__form">
              <p className="contacts__form-title">
                Or just write me a letter here_
              </p>
              <form className="js-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    className="form-field js-field-name"
                    type="text"
                    placeholder="Your name"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <span className="form-validation"></span>
                  <span className="form-invalid-icon">
                    <i className="mdi mdi-close" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="form-group">
                  <input
                    className="form-field js-field-email"
                    type="email"
                    placeholder="Your e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <span className="form-validation"></span>
                  <span className="form-invalid-icon">
                    <i className="mdi mdi-close" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-field js-field-message"
                    placeholder="Type the message here"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                  <span className="form-validation"></span>
                  <span className="form-invalid-icon">
                    <i className="mdi mdi-close" aria-hidden="true"></i>
                  </span>
                </div>
                <button
                  className="site-btn site-btn--form"
                  type="submit"
                  value="Send"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="footer">
              <p>
                © {new Date().getFullYear()} Asif Sorowar. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
