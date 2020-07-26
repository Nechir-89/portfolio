import React from 'react'
import Card from './Card'

// import images
import image1 from "./image1.jpg"
import image2 from "./image2.jpg"
import image3 from "./image3.jpg"
import image4 from "./image4.jpg"


export default function Body() {
    return (
        <section className="projectBody">
            <h3>Some Screenshots</h3>
            <Card
                imageURL={image1}
                desc=""
            />
            <Card
                imageURL={image2}
                desc=""
            />
            <Card
                imageURL={image3}
                desc=""
            />
            <Card
                imageURL={image4}
                desc=""
            />
        </section>
    )
}