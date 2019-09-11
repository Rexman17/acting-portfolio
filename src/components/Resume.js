import React, { Fragment } from 'react';
import styled from 'styled-components'
import { device } from '../media-queries'

const Resume = (props) => {

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

    @media ${device.tablet} {
      font-size: 18px;
    }

    @media ${device.laptop} {
      font-size: 22px;
    }
  `

  const RepTitle = styled.div`
    margin-top: 45px;
    font-family: 'Lexend Deca', sans-serif;
    letter-spacing: 3px;
    border-radius: 40px;
    font-size: 15px;
    font-weight: bold;

    @media ${device.tablet} {
      font-size: 22px;
      margin-top: 105px;
    }

    @media ${device.tablet} {
      font-size: 32px;
      margin-top: 105px;
    }
  `
  const Rep = styled.div`
    margin-top: 20px;
    font-size: 11px;
    font-family: 'Lexend Deca', sans-serif;
    border-radius: 40px;
    background-color: white;
    color: black;
    text-transform: uppercase;

    @media ${device.tablet} {
      font-size: 18px;
      margin-top: 40px;
    }

    @media ${device.laptop} {
      font-size: 22px;
      margin-top: 40px;
    }

  `

  return (

      <Fragment>
      { props.seeNav ? null :
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
      }

      </Fragment>


  )
}

export default Resume
