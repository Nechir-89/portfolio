import React from 'react';
import HeroHeading from "./components/heroSection/Heading"
import HeroFigure from "./components/heroSection/Figure"
import HeroDesc from "./components/heroSection/Desc"
import CallToAction from "./components/heroSection/CallToAction"


function App() {
  return (
    <div className="root">
      <HeroHeading />
      <HeroFigure />
      <HeroDesc />
      <CallToAction />
    </div>
  );
}

export default App;
