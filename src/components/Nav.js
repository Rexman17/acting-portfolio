import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import styled from 'styled-components'


const divStyles = {
  width: "35px",
  height: "5px",
  backgroundColor: "black",
  margin: "3px 0"
}

const flexDivStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end"
}


const Nav = (props) => {

  return (
    <div onClick={() => props.seeNav()} style={flexDivStyles}>
      <div style={divStyles}></div>
      <div style={divStyles}></div>
      <div style={divStyles}></div>
    </div>
  )

}

export default Nav

// <div id="navBarDiv">
//   <div className="nav-link">
//     <Link to="/" style={style}>
//       Home
//     </Link>
//   </div>
//     <div className="nav-link">
//       <Link to="/about" style={style}>
//         About
//       </Link>
//     </div>
//     <div className="nav-link">
//       <Link to="/resume" style={style}>
//         Resume
//       </Link>
//     </div>
//     <div className="nav-link">
//       <Link to="/reels" style={style}>
//         Reels
//       </Link>
//     </div>
//     <div className="nav-link">
//       <Link to="/photos" style={style}>
//         Photos
//       </Link>
//     </div>
//     <div className="nav-link">
//       <Link to="/contact" style={style}>
//         Contact
//       </Link>
//     </div>
//   </div>
