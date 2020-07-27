import React from "react"
import Project from "./children/Project"

import ImageProject1 from "./brhawebsite.svg"
import ImageProject2 from "./classTime.svg"

function Projects() {
    return (
        <div>
            <Project
                projectTitle="BRHA"
                imageSrc={ImageProject1}
                imageAlt="BRHA Website"
                url="https://www.brha-duhok.org/"
                id="1"
                desc="
                        This project built with WordPress as it has been asked by the agency.
                        the project has many pages, on each page, there are several sections. 
                        All of them were designed and developed from scratch using a WordPress 
                        Elementor plugin.
                        the website designed to be a good fit for the desktop screens only, 
                        and yeah definitely for some reason.
                    "
            />

            <Project
                projectTitle="Class Time Schedule"
                imageSrc={ImageProject2}
                imageAlt="Class Time Schedule"
                url="/ClassTimeProject"
                id="2"
                desc="
                        This project is basically build for computer science department (CS) 
                        to show class time on TV screens. The project is built in May 2019. 
                    "
            />
        </div>
    )
}

export default Projects;