import React from 'react';
import Portfolio from './components/Portfolio';
import About from './components/About';

// routing
import { BrowserRouter, Link, Route } from 'react-router-dom'

// images
import MenuImg from './menu.svg'
import crossImage from './cross.svg'
import logo from './logo.jpg'


export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isActive: false
    };
    this.handleClic = this.handleClic.bind(this);
  }
  handleClic(){
    this.setState(prevState => {
      return {isActive: !prevState.isActive}
    });

  }
  render() {

    return (
      <BrowserRouter>
        <header>
          {/* logo */}
          <div className="logo">
            <a href="/">
              <img src={logo} alt="dev Nechir" />
            </a>
          </div>
          {/* menu */}
          <nav onClick={this.handleClic}>
            {/* ------------------------------ */}
            <div>
              <img src={MenuImg} alt="menu" />
            </div>
            {/* ------------------------------ */}
            <ul className={this.state.isActive ? "active" : "" }>
              <li style={{marginBottom: "1rem", textAlign:"right", color: "white"}}>
                <img src={crossImage} alt="menu" />
                </li>
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
}


