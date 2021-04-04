import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiUrl } from "../config.json";
import { getMyInfos, getMyProfilePicture } from "./../service/myInfoService";

const Header = () => {
  const [info, setInfo] = useState({});
  const [profileP, setProfileP] = useState("");

  const loadData = async () => {
    const { data: info } = await getMyInfos();
    setInfo(info[0]);
    const { data: image } = await getMyProfilePicture();
    setProfileP(image.picture[0].url);
  };

  useEffect(() => {
    loadData();
  }, []);

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
                  <Link to={"tel:" + info.phone}>{info.phone}</Link>
                </dd>
                <dt>Email:</dt>
                <dd>
                  <Link to={"mailto:" + info.email}>{info.email}</Link>
                </dd>
                <dt>Address:</dt>
                <dd>{info.address}</dd>
              </dl>
            </div>
            <p className="personal-profile__social">
              <Link to="https://github.com/asifsorowar" target="_blank">
                <i className="fa fa-github"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/in/asif-sorowar-222609168"
                target="_blank"
              >
                <i className="fa fa-linkedin-square"></i>
              </Link>
              <Link to="https://www.facebook.com/asif.oyen" target="_blank">
                <i className="fa fa-facebook-square"></i>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
