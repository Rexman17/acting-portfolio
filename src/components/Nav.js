import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import styled from 'styled-components'

const Nav = () => {

  const NavIcon = styled.div`
    width: 35px;
    height: 5px;
    background-color: black;
    margin: 6px 0;
  `
  const divStyles`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `

  return (
    <div style={{divStyles}}>
      <NavIcon></NavIcon>
      <NavIcon></NavIcon>
      <NavIcon></NavIcon>
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
