import React from "react"

export default function Email(props) {
    return (
        <div className="email">
            <img 
                src={props.icon}
                alt="e-icon"
                />
            <span>
                {props.email}
            </span>
        </div>
    )
}