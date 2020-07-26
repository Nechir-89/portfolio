import React from 'react'


export default function Body(props) {
    return (
        <div className="card">
            <figure>
                <img src={props.imageURL} alt="projectImage" />
                <figcaption>
                    <p>
                        {props.desc}
                    </p>
                </figcaption>
            </figure>

        </div>
    )
}