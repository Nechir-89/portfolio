import React from "react"
import Main from "./about/Main"
import Footer from "./Footer"
import Contact from "./Contact"

export default function About(){
    return (
        <div className="about">
            <Main />
            <Contact />
            <Footer />
        </div>
    )
}