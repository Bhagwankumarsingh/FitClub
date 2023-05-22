import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
        <img src={Github} alt="" />
        <img src={Instagram} alt="" />
        <img src={LinkedIn} alt="" />
         </div>
      <div className="log-f">
        <img src={Logo} alt="" />
      </div>
      <p className="ish">Made With ❤️ by Bhagwan Kumar Singh aka Ishant Singh</p>
    </div> 

    <div className="blur blur-f-1"></div>
    <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
