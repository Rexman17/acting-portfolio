import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';


const ExposedNav = (props) => {

  return (
    <div id="navBarDiv" onClick={() => props.hideNav()} >
      <button style={{color: "white", fontSize: "15px"}} onClick={() => props.hideNav()}>X</button>
      <div className="nav-link">
        <Link to="/">
          HOME
        </Link>
      </div>
        <div className="nav-link">
          <Link to="/about">
            ABOUT
          </Link>
        </div>
        <div className="nav-link">
          <Link to="/resume">
            RESUME
          </Link>
        </div>
        <div className="nav-link">
          <Link to="/reels">
            REELS
          </Link>
        </div>
        <div className="nav-link">
          <Link to="/photos">
            PHOTOS
          </Link>
        </div>
        <div className="nav-link">
          <Link to="/contact">
            CONTACT
          </Link>
        </div>
      </div>

  )
}

export default ExposedNav;
