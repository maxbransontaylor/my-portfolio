import React from "react";

function Project({ project, index }) {
  const { projectTitle, imageUrl, repoLink, liveLink, tech, description } =
    project;

  return (
    <div className={"project-item col-10 col-lg-4 m-2 shadow-lg " + imageUrl}>
      <h2 className="project-header">{projectTitle}</h2>
      <div className="project-info d-flex justify-content-around align-items-center">
        <p className="project-description">{description}</p>
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
