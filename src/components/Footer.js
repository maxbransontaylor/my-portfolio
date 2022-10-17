import React from "react";
import githubLogo from "../github.svg";
import linkedInLogo from "../linkedin.svg";
import phoneLogo from "../phone.svg";
import emailLogo from "../email.svg";
function Footer() {
  return (
    <footer className="d-flex justify-content-center align-items-center">
      <a href="https://github.com/maxbransontaylor" target="_blank">
        <img src={githubLogo} className="footer-icon" />
      </a>
      <a href="https://www.linkedin.com/in/maxbtaylor/" target="_blank">
        <img src={linkedInLogo} className="footer-icon" />
      </a>
      <a href="mailto:maxbransontaylor@gmail.com">
        <img src={emailLogo} className="footer-icon" />
      </a>
      <a href="tel:9195309428">
        <img src={phoneLogo} className="footer-icon" />
      </a>
    </footer>
  );
}
export default Footer;
