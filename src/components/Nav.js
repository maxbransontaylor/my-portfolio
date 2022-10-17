import React, { useEffect } from "react";

function Nav({ currentPage, pageSelect }) {
  useEffect(() => {
    document.title = currentPage;
  });
  return (
    <header>
      <h1>Max Taylor</h1>
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
            <a className="nav-link">Download Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
