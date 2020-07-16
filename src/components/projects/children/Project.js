import React from "react";

function Project(props) {
    return (
        <figure>
            <a href={props.url}>
                <img
                    src={props.imageSrc}
                    alt={props.imageAlt}
                />
            </a>
            <figcaption>
                <h4>{props.id}- {props.projectTitle}</h4>
                <p>{props.desc}</p>
                <span><a href={props.url}>Read more...</a></span>
            </figcaption>
        </figure>
    )
}

export default Project;