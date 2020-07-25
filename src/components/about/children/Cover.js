import React from "react"
import CoverImage from "./devNechir.jpg"

export default function Text() {
    return (
        <div className="cover">
            <figure>
                <img src={CoverImage} alt="dev nechir"/>
                <figcaption>
                    <h3>dev. Nechir</h3>
                    <p>Designer & Developer</p>
                </figcaption>
            </figure>
        </div>
    )
}