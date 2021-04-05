import React from "react";
import { apiUrl } from "../config.json";

const Header = ({ info, profileP }) => {
  return (
    <div
      className="main-header"
      style={{
        backgroundImage: "url(" + apiUrl + profileP + ")",
        backgroundPosition: "center -250px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row personal-profile">
          <div className="col-md-4 personal-profile__avatar">
            <img className="" src={apiUrl + profileP} alt="avatar" />
          </div>
          <div className="col-md-8">
            <p className="personal-profile__name">Asif Sorowar</p>
            <p className="personal-profile__work">{info.desc}</p>
            <div className="personal-profile__contacts">
              <dl className="contact-list contact-list__opacity-titles">
                <dt>Age:</dt>
                <dd>{new Date().getFullYear() - 1997}</dd>
                <dt>Phone:</dt>
                <dd>
                  <a href={"tel:" + info.phone}>{info.phone}</a>
                </dd>
                <dt>Email:</dt>
                <dd>
                  <a href={"mailto:" + info.email}>{info.email}</a>
                </dd>
                <dt>Address:</dt>
                <dd>{info.address}</dd>
              </dl>
            </div>
            <p className="personal-profile__social">
              <a
                href="https://github.com/asifsorowar"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/asif-sorowar-222609168"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a
                href="https://www.facebook.com/asif.oyen"
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
  );
};

export default Header;
