import React from "react";
import genrebuddy from "../static/images/genrebuddy.png";
import giftpilot from "../static/images/giftpilot.png";
import portfolio from "../static/images/portfolio.png";
import weatherdash from "../static/images/weatherdash.png";
function Project({ project, index }) {
  const { projectTitle, imageUrl, repoLink, liveLink, tech } = project;
  console.log(imageUrl);
  return (
    <div className={"project-item col-10 col-lg-4 m-2 shadow-lg " + imageUrl}>
      <h2 className="project-header">{projectTitle}</h2>
      <div className="project-info d-flex justify-content-around align-items-center">
        <a href={repoLink} target="_blank" className="btn btn-secondary">
          Repository
        </a>
        <a href={liveLink} target="_blank" className="btn btn-primary">
          Live Site
        </a>
      </div>
      <h4 className="project-footer">{tech}</h4>
    </div>
  );
}
export default Project;
