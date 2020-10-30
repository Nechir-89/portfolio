import React from 'react';
import Portfolio from './components/Portfolio';
import About from './components/About';

// router
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

// icons
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

// class time project
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
            <div className='menuIcon'>
              <AiOutlineMenu />
            </div>
            {/* ------------------------------ */}
            <ul className={this.state.isActive ? "active" : ""}>
              <li style={{ marginBottom: "1rem", textAlign: "right", color: "white" }}>
                <AiOutlineClose />
              </li>
              <li><Link to="/">Portfolio</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><a href="/#contact">Make Contact</a></li>
              <li style={{display:'none'}}><Link to="/ClassTimeProject">schedule project</Link></li>
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


