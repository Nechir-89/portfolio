import React from "react"
import Email from "./children/Email"

// icons
import emailIcon from "./email.svg"
import codpenIcon from "./codePen.svg"
import facebookIcon from "./facebook.svg"
import githubIcon from "./github.svg"
import instagramIcon from "./instagram.svg"
import linkedinIcon from "./linkedin.svg"
import redditIcon from "./reddit.svg"
import twitterIcon from "./twitter.svg"
import youtubeIcon from "./youtube.svg"

import ContactLink from "./children/ContactLink"

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <h2>Contact Me</h2>
            <Email
                email="nechir.c2019@gmail.com"
                icon={emailIcon}
            />
            <div className="contactLinks">
                <div className="container">
                    {/* github */}
                    <ContactLink
                        url="https://github.com/Nechir-89"
                        icon={githubIcon}
                        alt="github-icon"
                    />
                    {/* codepen */}
                    <ContactLink
                        url="https://codepen.io/Nechir89"
                        icon={codpenIcon}
                        alt="codpen-icon"
                    />
                    {/* Linked in */}
                    <ContactLink
                        url="https://www.linkedin.com/in/nechir-dev-2242011b3/"
                        icon={linkedinIcon}
                        alt="linkedin-icon"
                    />
                    {/* redditIcon */}
                    <ContactLink
                        url="https://www.reddit.com/user/nechir-dev"
                        icon={redditIcon}
                        alt="reddit-icon"
                    />
                    {/* twitter  */}
                    <ContactLink
                        url="https://twitter.com/Nechir89"
                        icon={twitterIcon}
                        alt="twitter-icon"
                    />
                    {/* Facebook  */}
                    <ContactLink
                        url="https://www.facebook.com/NechirVan89/"
                        icon={facebookIcon}
                        alt="facebook-icon"
                    />
                    {/* Instgram */}
                    <ContactLink
                        url="https://www.instagram.com/nechirvan89/"
                        icon={instagramIcon}
                        alt="instagram-icon"
                    />
                    {/* YouTube */}
                    <ContactLink
                        url="https://www.youtube.com/channel/UC-5HS-AeihwNU6s8tCVWuVw?view_as=subscriber"
                        icon={youtubeIcon}
                        alt="youtube-icon"
                    />
                </div>
            </div>
        </section>
    )
}