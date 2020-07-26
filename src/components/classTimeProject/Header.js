import React from 'react'
import HeaderImage from "./classTime.svg"
export default function Header() {
    return (
        <section className="projectHeader">
            <figure>
                <img src={HeaderImage} alt="" />
                <figcaption>
                    <h3>Class Time Schedule Project</h3>
                    <p>
                        This project is basically build for computer science department (CS) 
                        to show class time on TV screens. I designed and developed the whole 
                        project. For development I used HTML, CSS (SCSS), JQuery, Ajax, JSON, 
                        PHP, and MySQL database.<br/>
                        I worked in this project to be local (no host), 
                        I just used localy on my computer and T.V screen.
                    </p>
                </figcaption>
            </figure>
        </section>
    )
}