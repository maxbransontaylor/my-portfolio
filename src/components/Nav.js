import React, { useEffect } from "react";
import resume from "../taylor-resume.pdf";
function Nav({ currentPage, pageSelect, setShowModal }) {
  useEffect(() => {
    document.title = currentPage;
  });
  return (
    <header>
      <h1>Max Taylor</h1>
      <button className="btn" id="modalbutton" onClick={() => setShowModal(true)}>Customize!</button>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              className={`nav-link ${currentPage === "About Me" && "active"}`}
              onClick={() => pageSelect("About Me")}
              aria-current="page"
              href="#"
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${currentPage === "Work" && "active"}`}
              onClick={() => pageSelect("Work")}
              href="#"
            >
              Work
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${currentPage === "Contact" && "active"}`}
              onClick={() => pageSelect("Contact")}
              href="#"
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="resume-btn"
              href={resume}
              target="_blank"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
