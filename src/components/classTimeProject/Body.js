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
                desc="The above page is Home page (index page), in the home page there are
                two avialable option. first option (Class schedule) to display schedule on
                TV screens and second option (Update Schedule) is to change schedule."
            />
            <Card
                imageURL={image2}
                desc="
                        Schedule display page is the first option and it is designed to display
                        four tables at a time from 8 tables (first four tables will appear first
                        and after 20 seconds next four tables will appear and current tables will
                        disappear). time and date also have been set on the page.
                "
            />
            <Card
                imageURL={image3}
                desc="
                        Here is the second avialable option from home page. in this page 
                        user can change schedule data. It is designed to be easy to use
                        and fast.    
                "
            />
            <Card
                imageURL={image4}
                desc="On top, right hand corner there is notification, whenever user change 
                something and click on save button there will be notification for him which
                shows the state of change (pass or fail) "
            />
        </section>
    )
}