import React from "react";
import Project from './Project'
import projectData from '../project-data.json'
function Work() {
    const { projects } = projectData
    console.log(projects)
    return (<div className="projects container">
        <div className="d-flex justify-content-center flex-wrap">
            {projects.map((project, i) => {
                return (
                    <Project project={project} key={i}></Project>)
            })}

        </div>
    </div>)
}

export default Work