import React from 'react';
import Portfolio from './components/Portfolio';
import About from './components/About';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'




import ClassTimeProject from "./components/ClassTimeScheduleProject"

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: false
    };
    this.handleClic = this.handleClic.bind(this);
  }
  handleClic() {
    this.setState(prevState => {
      return { isActive: !prevState.isActive }
    });

  }
  render() {

    return (
      <BrowserRouter>
        <header>
          {/* logo */}
          <div className="logo">
            <a href="/">
              <img src='/images/logo.svg' alt="dev Nechir" />
            </a>
          </div>
          {/* menu */}
          <nav onClick={this.handleClic}>
            {/* ------------------------------ */}
            <div>
              <img src='/images/menu.svg' alt="menu" />
            </div>
            {/* ------------------------------ */}
            <ul className={this.state.isActive ? "active" : ""}>
              <li style={{ marginBottom: "1rem", textAlign: "right", color: "white" }}>
                <img src='/images/cross.svg' alt="menu" />
              </li>
              <li><Link to="/">Portfolio</Link></li>
              <li><Link to="/About">About</Link></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            <Portfolio />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/ClassTimeProject">
            <ClassTimeProject />
          </Route>
        </Switch>
      </BrowserRouter>

    )
  }
}


