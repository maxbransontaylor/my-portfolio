import React, { useEffect } from "react";
import Project from "./Project";
import projectData from "../project-data.json";
import { showPage, hidePage } from "../utils/helpers";
function Work() {
  // directly editing the css rules for the page to avoid having to use react-router-dom
  useEffect(() => {
    showPage(5);
    return function cleanup() {
      hidePage(5);
    };
  }, []);
  const { projects } = projectData;

  return (
    <div className="projects d-flex justify-content-center flex-wrap">
      {projects.map((project, i) => {
        return <Project project={project} key={i}></Project>;
      })}
    </div>
  );
}

export default Work;
