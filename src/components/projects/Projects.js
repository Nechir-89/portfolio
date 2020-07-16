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
                        Hi, My name is Nechir, I design and 
                        develope web apps beautifly and 
                        clearly. You can reach me out buy 
                        social  networks provided in the 
                        foooter section or just click on 
                        contact me.
                    "
            />

            <Project
                projectTitle="Class Time Schedule"
                imageSrc={ImageProject2}
                imageAlt="Class Time Schedule"
                url="/"
                id="2"
                desc="
                        Hi, My name is Nechir, I design and 
                        develope web apps beautifly and 
                        clearly. You can reach me out buy 
                        social  networks provided in the 
                        foooter section or just click on 
                        contact me.
                    "
            />
        </div>
    )
}

export default Projects;