import React from 'react';
import HeroHeading from "./components/heroSection/Heading"
import HeroFigure from "./components/heroSection/Figure"
import HeroDesc from "./components/heroSection/Desc"
import CallToAction from "./components/heroSection/CallToAction"
import Projects from "./components/projects/Projects"
import Tools from "./components/tools/Tools.js"
import Contact from "./components/contact/Contact"

function App() {
  return (
    <div className="root">
    {/* Hero section */}
      <HeroHeading />
      <HeroFigure />
      <HeroDesc />
      <CallToAction />
      {/* project section */}
      <section className="projects">
        <h3>RECENT PROJECTS</h3>
        <Projects />        
      </section>
      {/* What I use section */}
      <Tools />
      {/* Contact Us */}
      <Contact />
    </div>
  );
}

export default App;
