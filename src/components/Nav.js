import React from 'react';
// import { device } from '../media-queries.js'

const divStyles = {
  width: "35px",
  height: "5px",
  backgroundColor: "black",
  margin: "3px 0"
}

const flexDivStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  marginRight: "4px",
  marginTop: "3px"
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
