import React from "react"
import Heading from "./children/Heading.js"

import designIcon from "./design-24px.svg"
import developIcon from "./code-24px.svg"


export default function Tools() {
    return (
        <section className="tool" id="tools">
            <h3>WHAT I USE</h3>
            <Heading
                imageSrc={designIcon}
                text="Design"
                imageAlt="icon"
            />
            <p>
                I take UX/UI principles to draw wireframes by pen and paper and 
                transform it to digital wireframe and mockup using Adobe XD
            </p>
            <Heading
                imageSrc={developIcon}
                text="Development"
                imageAlt="icon"
            />
            <p>
                I use HTML, CSS, and JS to build up websites and web apps 
                with the help of libraries, frameworks, and tools like SCSS, 
                Bootstrap CSS, JQuery, AJAX, JSON, React JS, WordPress, and
                Git for version control.
            </p>
        </section>
    )
}