import React from 'react';

import HeroHeading from "./components/heroSection/Heading"
import HeroFigure from "./components/heroSection/Figure"
import HeroDesc from "./components/heroSection/Desc"
import CallToAction from "./components/heroSection/CallToAction"
import Projects from "./components/projects/Projects"
import Tools from "./components/tools/Tools.js"
import Contact from "./components/contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <main>
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

export default App;
