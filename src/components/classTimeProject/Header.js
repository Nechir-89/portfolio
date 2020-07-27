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
                        to show class time on TV screens. <br /> <br />
                        The project is built in <strong>May 2019</strong>. 
                        I used pen and papre to build wireframe. 
                        and for development I used 
                        HTML, CSS (SCSS), JQuery, Ajax, JSON as a front-end almost and WAMP server
                        to deal with PHP, PHP myadmin, Apache, and MySQL database as the back-end<br/><br/>
                        I worked and setup everything of the project on my machine which is local,
                        because I just want to be local and it did not need to be avialable on the internet.
                    </p>
                </figcaption>
            </figure>
        </section>
    )
}