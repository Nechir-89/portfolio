import React from "react"

export default function Heading(props) {
    return (
        <div className="toolsHeading">
            <img
                src={props.imageSrc}
                alt={props.imageAlt}
            />
            <h4>{props.text}</h4>
        </div>
    )
}