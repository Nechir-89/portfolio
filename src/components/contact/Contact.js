import React from "react"
import Email from "./children/Email"

// icons
import emailIcon from "./email.svg"
// import codpenIcon from "./codePen.svg"
// import facebookIcon from "./facebook.svg"
import githubIcon from "./github.svg"
// import instagramIcon from "./instagram.svg"
// import linkedinIcon from "./linkedin.svg"
// import redditIcon from "./reddit.svg"
// import twitterIcon from "./twitter.svg"
// import youtubeIcon from "./youtube.svg"

import ContactLink from "./children/ContactLink"

export default function Contact() {
    return (
        <section className="contact">
            <h3>CONTACT ME</h3>
            <Email
                email="nechir.c2019@gmail.com"
                icon={emailIcon}
            />
            <div className="contactLinks">
                <ContactLink
                    url="https://github.com/Nechir-89"
                    icon={githubIcon}
                    alt="github-icon"
                />
            </div>
        </section>
    )
}