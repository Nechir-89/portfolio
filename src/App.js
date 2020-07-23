import React from 'react';
import Portfolio from './components/Portfolio';
import About from './components/About';

// routing
import { BrowserRouter, Link, Route } from 'react-router-dom'


export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Portfolio</Link></li>
          <li><Link to="/About">About</Link></li>
        </ul>
      </nav>
      <div>
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/About" component={About} />
      </div>
    </BrowserRouter>

  )
}


