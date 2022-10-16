import React from "react";


function Project({ project }) {
    const { projectTitle, imageUrl, repoLink, liveLink } = project
    return (
        <div className="project-item col-10 col-lg-4 m-2 shadow-lg" style={{ backgroundImage: `url(/images/${imageUrl}` }}>
            <h1 className="project-header">{projectTitle}</h1>
            <div className="project-info d-flex justify-content-center align-items-center">
                <a href={repoLink} target='_blank' className="bg-primary text-light">Repository</a>
                <a href={liveLink} target='_blank' className="bg-secondary text-light">Live Site</a>
            </div>
        </div>

    )
}
export default Project