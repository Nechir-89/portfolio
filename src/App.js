import React from 'react';
import Portfolio from './components/Portfolio';
import About from './components/About';

// routing
import { BrowserRouter, Link, Route } from 'react-router-dom'


export default function App() {
  return (
    <BrowserRouter>
      <header>
        {/* logo */}
        <div className="logo">
          <a href="/">
            dev. <strong>NECHIR</strong>
          </a>
        </div>
        {/* menu */}
        <nav>
          <div>
            <img src="" alt="menu" />
          </div>
          <ul className="active">
            <li><Link to="/">Portfolio</Link></li>
            <li><Link to="/About">About</Link></li>
          </ul>
        </nav>

      </header>

      <div>
        <Route exact path="/" component={Portfolio} />
        <Route path="/About" component={About} />
      </div>
    </BrowserRouter>

  )
}


