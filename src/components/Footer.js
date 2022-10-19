import React, { useState } from "react";
import githubLogo from "../github.svg";
import linkedInLogo from "../linkedin.svg";
import phoneLogo from "../phone.svg";
import emailLogo from "../email.svg";
function Footer() {
  const [contactDetails, setContactDetails] = useState("");
  function hoverHandler(e) {
    e.preventDefault();
    const link = e.target.parentElement;
    let info = link.href;
    if (info) {
      info = info.replace("mailto:", "").replace("tel:", "");
    }
    setContactDetails(info);
  }
  return (
    <footer
      onMouseLeave={() => setContactDetails("")}
      className="d-flex justify-content-center align-items-center row flex-wrap"
    >
      <a
        className="col-2"
        onMouseOver={hoverHandler}
        aria-details="contact-details"
        href="https://github.com/maxbransontaylor"
        target="_blank"
      >
        <img src={githubLogo} className="footer-icon" />
      </a>
      <a
        className="col-2"
        onMouseOver={hoverHandler}
        aria-details="contact-details"
        href="https://www.linkedin.com/in/maxbtaylor/"
        target="_blank"
      >
        <img src={linkedInLogo} className="footer-icon" />
      </a>
      <a
        className="col-2"
        onMouseOver={hoverHandler}
        aria-details="contact-details"
        href="mailto:maxbransontaylor@gmail.com"
      >
        <img src={emailLogo} className="footer-icon" />
      </a>
      <a
        className="col-2"
        onMouseOver={hoverHandler}
        aria-details="contact-details"
        href="tel:9195309428"
      >
        <img src={phoneLogo} className="footer-icon" />
      </a>
      <div
        id="contact-details"
        className={`d-flex justify-content-center ${contactDetails ? "yopacity" : "nopacity"
          }`}
      >
        <h2>{contactDetails}</h2>
      </div>
    </footer>
  );
}
export default Footer;
