import React from "react"
import Heading from "./children/Heading.js"

import designIcon from "./design-24px.svg"
import developIcon from "./code-24px.svg"


export default function Tools() {
    return (
        <section className="tool" id="tools">
            <h2>What I Use ?</h2>
            <Heading
                imageSrc={designIcon}
                text="Design"
                imageAlt="icon"
                color="teal"
            />
            <p>
                I take <strong>UX/UI</strong> principles to draw wireframes by 
                pen and paper and transform it to digital<strong> wireframe </strong>
                and <strong>mockup</strong> using Adobe XD.
            </p>
            <Heading
                imageSrc={developIcon}
                text="Development"
                imageAlt="icon"
                color="#947A12"
            />
            <p>
                I use <strong>HTML, CSS, and JS </strong>to build up websites and web apps 
                with the help of libraries, frameworks, and tools like <strong>SCSS, 
                Bootstrap CSS, JQuery, AJAX, JSON, React JS, WordPress, and
                Git</strong> for version control.
            </p>
        </section>
    )
}