import React from "react"

import HeroHeading from "./heroSection/Heading"
import HeroFigure from "./heroSection/Figure"
import HeroDesc from "./heroSection/Desc"
import CallToAction from "./heroSection/CallToAction"
import Projects from "./projects/Projects"
import Tools from "./tools/Tools.js"
import Contact from "./contact/Contact"
import Footer from "./Footer/Footer"

export default function Portfolio(){
    return (
        <main className="portfolioMain">
        {/* Hero section */}
          <HeroHeading />
          <HeroFigure />
          <HeroDesc />
          <CallToAction />
          {/* Separation */}
          <div className="separation"></div>
          {/* project section */}
          <section className="projects" id="projects">
            <h3>RECENT PROJECTS</h3>
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