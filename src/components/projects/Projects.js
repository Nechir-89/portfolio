import React from "react"

import Data from './ProjectData'
import { Link } from 'react-router-dom'
function Projects() {
    return (
        <div>
            {
                Data.map(project =>
                    <figure key={project.id}>
                        {
                            project.url.search('http') !== -1 ?
                                <a href={project.url} target='_blank' rel='noreferrer noopener'>
                                    <img
                                        src={project.imgSrc}
                                        alt={project.alt}
                                    />
                                </a> :
                                <Link to={project.url}>
                                    <img
                                        src={project.imgSrc}
                                        alt={project.alt}
                                    />
                                </Link>
                        }

                        <figcaption>
                            <h4>{project.id}- {project.title}</h4>
                            <p>{project.desc}</p>
                            <span>Click <a href={project.url}>here</a> to find it out.</span>
                        </figcaption>
                    </figure>
                )
            }
        </div>
    )
}
export default Projects;