import React from "react"

export default function Heading(props) {
    return (
        <div className="toolsHeading">
            <img
                src={props.imageSrc}
                alt={props.imageAlt}
            />
            <h3 style={{color: props.color}}>{props.text}</h3>
        </div>
    )
}