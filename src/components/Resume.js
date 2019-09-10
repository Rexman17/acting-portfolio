import React from 'react';
import styled from 'styled-components'

// import React from "react";
// import resume from "../assets/resume.pdf";

// const Resume = () => {
//   return (
//     <div className="resume wrapper" data-aos="fade-up">
//       <object type="application/pdf" data={resume} title="resume" />
//     </div>
//   );
// };
//
// export default Resume;

const Resume = () => {

  const ViewResume = styled.div`
    background-color: black;
    padding: 20px;
    margin-top: 45px;
    border-radius: 40px;
    width: 35%;
    text-align: center;
    font-weight: bold;
  `

  const FlexDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `

  const Anchor = styled.a`
    color: white;
    text-decoration: none;
    font-family: 'Lexend Deca', sans-serif;
    letter-spacing: 3px;
    font-size: 13px;
  `

  const RepTitle = styled.div`
    margin-top: 45px;
    font-family: 'Lexend Deca', sans-serif;
    letter-spacing: 3px;
    border-radius: 40px;
    font-size: 15px;
    font-weight: bold;
  `
  const Rep = styled.div`
    margin-top: 20px;
    font-size: 11px;
    font-family: 'Lexend Deca', sans-serif;
    border-radius: 40px;
    background-color: white;
    color: black;
    text-transform: uppercase;
  `

  return (
    <FlexDiv>
      <ViewResume>
        <Anchor href="https://drive.google.com/file/d/1fUBl-5ku_w4KWkqC2KODR0oX_Vmxz7Uh/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          VIEW RESUME
        </Anchor>
      </ViewResume>
      <RepTitle>
        <span class="fa fa-star checked"></span>
          <span style={{padding: "0px 5px"}}>
            REPRESENTATION
          </span>
        <span class="fa fa-star checked"></span>
      </RepTitle>
      <Rep>MKM Maude Kaplan Management</Rep>
      <Rep>Take 3 Talent</Rep>
      <Rep>Abrams Artists Agency</Rep>
      <Rep>Paradigm Talent Agency</Rep>
      <Rep>Stefanie Talent & Entertainment</Rep>
      <Rep>Eileen Haves Talent Representatives</Rep>
    </FlexDiv>
  )
}

export default Resume


// src="/assets/acting-resume.pdf"
