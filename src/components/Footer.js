import React from "react"

const footerData = [
    {
        id: 1,
        link: "/#herosection",
        name: "Portfolio",
        col: "2/3"
    },
    {
        id: 2,
        link: "/About",
        name: "About",
        col: "3/4"
    },
    {
        id: 4,
        link: "/#projects",
        name: "Projects",
        col: "2/3"
    },
    {
        id: 5,
        link: "/#tools",
        name: "What I Use",
        col: "3/4"
    }
]

function Footer() {

    const footerLinks = footerData.map(
        data => <Link key={data.id} link={data.link} name={data.name} col={data.col} />
    )

    return (
        <footer>
            <div className="container">
                <div className='links'>
                    {footerLinks}
                </div>
                <div className="publishDate">
                    &copy; dev. Nechir, Auguest 2020
                </div>
            </div>
        </footer>
    )
}


function Link(props) {
    return (<a href={props.link} > {props.name}</a>)
}

export default Footer;