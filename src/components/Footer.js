import React from "react"
import { Link } from 'react-router-dom'
const footerData = [
    {
        id: 1,
        link: "/#herosection",
        name: "Portfolio",
    },
    {
        id: 2,
        link: "/About",
        name: "About",
    },
    {
        id: 4,
        link: "/#projects",
        name: "Projects",
    },
    {
        id: 5,
        link: "/#tools",
        name: "What I Use",
    }
]

function Footer() {

    const footerNavLinks = footerData.map(
        data => <NavLink key={data.id} link={data.link} name={data.name} />
    )

    return (
        <footer>
            <div className="container">
                <div className='links'>
                    {footerNavLinks}
                </div>
                <div className="publishDate">
                    &copy; dev. Nechir, Nov 2020
                </div>
            </div>
        </footer>
    )
}


function NavLink(props) {
    
    return (
        props.link === '/About' ? 
        <Link to='/About' onClick={()=> window.scrollTo(0, 0)}> { props.name } </Link > 
        : 
        <a href={props.link} > {props.name}</a>
    )
}

export default Footer;