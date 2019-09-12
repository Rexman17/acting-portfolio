import React, { Fragment } from 'react';
import styled from 'styled-components'
import { device } from '../media-queries.js'

const Contact = (props) => {

  const ContactDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-top: 50px;
  `

  const H2 = styled.div`
    font-family: 'Oswald', sans-serif;
    font-size: medium;
    margin-top: 5px;
    letter-spacing: 2px;
    color: black;
    text-align: center;
    padding: 2px;
    margin-top: 20px;
    font-size: 18px;

    @media ${device.tablet} {
      font-size: 28px;
    }

    @media ${device.laptop} {
      font-size: 48px;
    }
  `

  const H3 = styled.div`
    text-align: center;
    font-family: 'Oswald', sans-serif;
    color: black;
    font-size: 16px;

    @media ${device.tablet} {
      font-size: 25px;
    }

    @media ${device.laptop} {
      font-size: 38px;
    }
  `

  return (
    <Fragment>
    { props.seeNav ? null :
      <ContactDiv>
        <H3>a.stone1794@gmail.com</H3>
        <H2>Maude Kaplan Management</H2>
        <H3>Maggie Maes</H3>
        <H3>212-873-4303</H3>
        <H3>maggie@mkmtalent.com</H3>
      </ContactDiv>
    }
    </Fragment>
  )
}

export default Contact;
