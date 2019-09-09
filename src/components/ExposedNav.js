import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';


const ExposedNav = (props) => {

  return (
    <div id="navBarDiv">
      <button onClick={() => props.hideNav()}>X</button>
      <div className="nav-link">
        <Link to="/">
          Home
        </Link>
      </div>
        <div className="nav-link">
          <Link to="/about">
            About
          </Link>
        </div>
        <div className="nav-link">
          <Link to="/resume">
            Resume
          </Link>
        </div>
        <div className="nav-link">
          <Link to="/reels">
            Reels
          </Link>
        </div>
        <div className="nav-link">
          <Link to="/photos">
            Photos
          </Link>
        </div>
        <div className="nav-link">
          <Link to="/contact">
            Contact
          </Link>
        </div>
      </div>

  )
}

export default ExposedNav;
