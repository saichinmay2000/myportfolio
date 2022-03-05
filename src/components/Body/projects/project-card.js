import React from "react";
import './projectcard.css'

function ProjectCard({ project }) {
    return(
        <div className="project-card">
            <div className="project-info">
                <label className="project-title">{project.title}</label>
                <div className="project-links">
                    {project.demolink && (
                            <a className="project-link" href={project.demolink}>
                            <div className="link-button">
                            <i class="fi fi-rr-globe"></i> Demo
                            </div>
                            </a>
                        )}
                        {project.github && (
                            <a className="project-link" href={project.github}>
                            <div className="link-button">
                            <i class="devicon-github-original"></i>Github
                            </div>
                            </a>
                        )}
                </div>
                <p>
                    {project.about}
                </p>
                <div className="project-tags">
                    {project.tags.map((tag) => {
                        return(
                            <label className="tag">{tag}</label>
                        )
                    })}
                </div>
            </div>
            {/* <img src={project.image} className="project-photo" alt="project-loading" /> */}
        </div>
    )
}

export default ProjectCard