import React from "react"

export default function ContactLink(props) {
    return (
        <div className="contactLink">
            <a href={props.url}>
                <img sr={props.icon} alt={props.alt} />
            </a>
        </div>
    )
}