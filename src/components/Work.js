import React, { useEffect, useState } from "react";
import Project from "./Project";
import projectData from "../project-data.json";

function Work() {
  const [pageLoad, setPageLoad] = useState(false);
  useEffect(() => {
    setPageLoad(true);
    return function cleanup() {
      setPageLoad(false);
    };
  }, []);
  const { projects } = projectData;

  return (
    <div
      className={`projects d-flex justify-content-center flex-wrap ${
        pageLoad ? "yopacity" : "nopacity"
      }`}
    >
      {projects.map((project, i) => {
        return <Project project={project} key={i} index={i}></Project>;
      })}
    </div>
  );
}

export default Work;
