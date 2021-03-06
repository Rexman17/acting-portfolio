import React, { Fragment } from 'react';
import styled from 'styled-components';

const Footer = () => {

  const Footer = styled.footer`
    position: fixed;
    bottom:0;
    width:100%;
    height:30px;   /* Height of the footer */
    background:black;
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
