import React from "react"
import Link from "./children/Link"
import footerData from "./children/data"

export default function Footer() {

    const footerLinks = footerData.map(data =>
        <Link key={data.id}
            // linkData = {data}
            // or
            link={data.link}
            name={data.name}
            col={data.col}
        />
    )

    return (
        <footer>
            <div className="container">
                {footerLinks}
                <div className="publishDate">
                    &copy; July 2020
                </div>
            </div>


        </footer>
    )
}
