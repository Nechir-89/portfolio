import React from "react"
import Link from "./children/Link"

export default function Footer() {
    return (
        <footer>
            <div className="container">
                {/* Portfolio */}
                <Link
                    link="#herosection"
                    name="Portfolio"
                    col="2/3"
                />
                {/* About */}
                <Link
                    link="/about.html"
                    name="About"
                    col="3/4"
                />
                {/* Contact */}
                <Link
                    link="#contact"
                    name="Contact Me"
                    col="2/3"
                />
                {/* Projects */}
                <Link
                    link="#projects"
                    name="Projects"
                    col="3/4"
                />
                {/* What I use */}
                <Link
                    link="#tools"
                    name="What I Use"
                    col="2/3"
                />
                <div className="publishDate">
                    &copy; July 2020
                </div>
            </div>


        </footer>
    )
}
