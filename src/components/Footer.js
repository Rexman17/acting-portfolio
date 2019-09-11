import React, { Fragment } from 'react';
import styled from 'styled-components';
import { device } from '../media-queries.js'

const Footer = () => {

  const Footer = styled.footer`
    /* position: fixed; */
    bottom:0;
    width:100%;
    height:30px;   /* Height of the footer */
    background:black;

    @media ${device.tablet} {
      height:40px;
    }

    @media ${device.laptop} {
      height:80px;
    }
  `

  return (
    <Fragment>
      <Footer>
        <div id="footer-txt">
          Code + Design by Moi!
        </div>
      </Footer>
    </Fragment>
  )
}

export default Footer
