import React from "react"
import Main from "./about/Main"
import Footer from "./Footer"
import Contact from "./contact/Contact"

export default function About(){
    return (
        // <h1>About Page</h1>
        <div className="about">
            <Main />
            <Contact />
            <Footer />
        </div>
    )
}