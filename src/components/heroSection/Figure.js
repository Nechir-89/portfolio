import React from "react";
import Image from "./illistration.svg"

function Figure() {
    return (
        <section className="heroFigure">
            <figure>
                <img src={Image} alt="Work Illistration"/>
            </figure>
        </section>
    )
}

export default Figure;