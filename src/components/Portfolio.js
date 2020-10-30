import React from "react"

import HeroHeading from "./heroSection/Heading"
import HeroFigure from "./heroSection/Figure"
import HeroDesc from "./heroSection/Desc"
import CallToAction from "./heroSection/CallToAction"

import Projects from "./projects/Projects"
import Tools from "./Tools.js"
import Contact from "./Contact"
import Footer from "./Footer"

export default function Portfolio() {
  return (
    <main className="portfolioMain">
      {/* Hero section */}
      {/* <HeroHeading /> */}
      <section className="heroHeader" id="herosection">
        <h1>
          <span>Web Designer </span>
          <span>& </span>
          <span>Developer</span>
        </h1>
      </section>
      {/* <HeroFigure /> */}
      <section className="heroFigure">
        <figure>
          <img src='/images/illistration2.svg' alt="Work Illistration" />
        </figure>
      </section>
      {/* <HeroDesc /> */}
      <section className="heroDesc">
        <p>
          Hi, I am Nechir /nɪtʃi:r/<br />
                I design and develop beautiful, fast, and easy to use websites and
                web apps.
           </p>
      </section>
      {/* <CallToAction /> */}
      <section className="CallToAction">
        <a href="#contact">Contact Me</a>
      </section>
      {/* Separation */}
      <div className="separation">
        <div className="custom-shape-divider-top-1595766065">
          <svg data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
      {/* project section */}
      <section className="projects" id="projects">
        <h2>Recent Projects</h2>
        <Projects />
      </section>
      {/* What I use section */}
      <Tools />
      {/* Contact Us */}
      <Contact />
      {/* Footer */}
      <Footer />
    </main>
  );
}