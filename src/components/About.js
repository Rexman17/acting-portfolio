import React from 'react';
import styled from 'styled-components'

const About = () => {

  const AboutMe = styled.h1`
    font-family: 'Lexend Deca', sans-serif;
    text-align: center;
    margin-top: 40px;
    font-size: 1.5em;
    letter-spacing: 1px;
  `

  const LI = styled.li`
    margin: 10px 0;
  `


  return (
    <div>
      <AboutMe>ABOUT ME</AboutMe>
      <div style={{padding: "15px 15px"}}>
        <ul>
          <LI>New York native</LI>
          <LI>Discovered my love of performing at a young age</LI>
          <LI>Played competitive sports for a while until I decided to audition for the school play...</LI>
          <LI>I got the lead role! And had to quit the lacrosse team (of which I was the captain...oh well)</LI>
          <LI>Continued to perform in the school plays and never looked back</LI>
          <LI>Studied under the teachings of Ann Gray Graf, Founder and Owner of The Actors Garage</LI>
          <LI>Studied at The Second City in Chicago, UCB, Matt Newton Studio, and more...</LI>
          <LI>See my Resume for my credits!</LI>
        </ul>
      </div>
    </div>
  )
}

export default About
