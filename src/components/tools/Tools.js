import React from "react"
import Heading from "./children/Heading.js"

import designIcon from "./design-24px.svg"
import developIcon from "./code-24px.svg"


export default function Tools() {
    return (
        <section className="tool">
            <h3>WHAT I USE</h3>
            <Heading
                imageSrc={designIcon}
                text="Design"
                imageAlt="icon"
            />
            <p>
                I usually like to design things from scrach,
                and UX is the first approach take action in
                designing web apps. I use pen and paper to
                build mockups and  wireframes. then UI
                approach is taking second level of work along
                side digital wireframe.
            </p>
            <Heading
                imageSrc={developIcon}
                text="Development"
                imageAlt="icon"
            />
            <p>
                For coding and development I often times use the mix
                of the following markup and programming languages,
                platforms, and libraries with taking care of responsive
                design..
            </p>
            <p>
                HyperText Markup Language (HTML), Cascading Style Sheet
                (CSS), Java Script (JS), CSS Bootstap, SASS (SCSS),
                React JS, JQuery, AJAX
            </p>
        </section>
    )
}