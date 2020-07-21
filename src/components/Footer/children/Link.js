import React from "react"

export default function Link(props) {
    return (
        <a
            style={{ "grid-column": props.col }}
            href={props.link}>
            {props.name}
        </a>
    )
}