import React from 'react'

function HeroSection() {
    return (
        <div className='herosection'>

            <section className="heroHeader" id="herosection">
                <h1>
                    <span>Web Designer </span>
                    <span>& </span>
                    <span>Web Developer</span>
                </h1>
            </section>

            <section className="heroFigure">
                <figure>
                    <img src='/images/illistration2.svg' alt="Work-Illistration" />
                </figure>
            </section>

            <section className="heroDesc">
                <p>
                    Hi, I am Nechir /nɪtʃi:r/<br />
                I design and develop beautiful, fast, and easy to use websites and
                web apps.
                </p>
            </section>

            <section className="CallToAction">
                <a href="#contact">Make Contact</a>
            </section>
        </div>
    )
}

export default HeroSection;