import React from "react"

// icons
import {
    AiFillGithub,
    AiFillCodepenCircle,
    AiFillLinkedin,
    AiFillRedditCircle,
    AiFillTwitterCircle,
    AiFillInstagram,
    AiFillYoutube
} from 'react-icons/ai'

import { FaFacebook } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function Contact() {
    return (
        <section className="contact" id="contact">
            <h2>Contact Me</h2>
            <div className="email">
                <MdEmail />
                <span>nechir.c2019@gmail.com</span>
            </div>
            <div className="contactLinks">
                <div className="container">
                    {/* github */}
                    <div className="contactLink">
                        <a href='https://github.com/Nechir-89' rel='noreferrer noopener'>
                            <AiFillGithub />
                        </a>
                    </div>
                    {/* codepen */}
                    <div className="contactLink">
                        <a href='https://codepen.io/Nechir89' rel='noreferrer noopener'>
                            <AiFillCodepenCircle />
                        </a>
                    </div>
                    {/* Linked in */}
                    <div className="contactLink">
                        <a href='https://www.linkedin.com/in/nechir-dev-2242011b3/' rel='noreferrer noopener'>
                            <AiFillLinkedin />
                        </a>
                    </div>
                    {/* redditIcon */}
                    <div className="contactLink">
                        <a href='https://www.reddit.com/user/nechir-dev' rel='noreferrer noopener'>
                            <AiFillRedditCircle />
                        </a>
                    </div>
                    {/* twitter */}
                    <div className="contactLink">
                        <a href='https://twitter.com/Nechir89' rel='noreferrer noopener'>
                            <AiFillTwitterCircle />
                        </a>
                    </div>
                    {/* facebook */}
                    <div className="contactLink">
                        <a href='https://www.facebook.com/NechirVan89/' rel='noreferrer noopener'>
                            <FaFacebook />
                        </a>
                    </div>
                    {/* instgarm */}
                    <div className="contactLink">
                        <a href='https://www.instagram.com/nechirvan89/' rel='noreferrer noopener'>
                            <AiFillInstagram />
                        </a>
                    </div>
                    {/* Youtube */}
                    <div className="contactLink">
                        <a href='https://www.youtube.com/channel/UC-5HS-AeihwNU6s8tCVWuVw?view_as=subscriber' rel='noreferrer noopener'>
                            <AiFillYoutube />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;