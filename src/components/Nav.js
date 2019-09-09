import React from 'react';
// import { BrowserRouter as Route, Link } from 'react-router-dom';

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
  // console.log("Nav props", props)

  return (
    <div onClick={() => props.seeNav()} style={flexDivStyles}>
      <div style={divStyles}></div>
      <div style={divStyles}></div>
      <div style={divStyles}></div>
    </div>
  )

}

export default Nav
