import React from "react"

import HeroSection from './HeroSection'
import Projects from "./projects/Projects"
import Tools from "./Tools.js"
import Contact from "./Contact"
import Footer from "./Footer"

export default function Portfolio() {
  return (
    <main className="portfolioMain">
      <HeroSection />
      <section className="projects" id="projects">
        <h2>PROJECTS</h2>
        <Projects />
      </section>
      <Tools />
      <Contact />
      <Footer />
    </main>
  );
}