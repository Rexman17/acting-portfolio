import React from 'react';
import styled from 'styled-components'

const Resume = () => {

  const ViewResume = styled.div`
    background-color: black;
    padding: 20px;
    margin-top: 35px;
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
    font-family: 'Oswald', sans-serif;
    letter-spacing: 3px;
    font-size: 15px;
  `

  const RepTitle = styled.div`
    margin-top: 40px;
    font-family: 'Oswald', sans-serif;
    letter-spacing: 3px;
    border-radius: 40px;
    font-weight: bold;
  `
  const Rep = styled.div`

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
    </FlexDiv>
  )
}

export default Resume


// src="/assets/acting-resume.pdf"
