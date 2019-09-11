import React, { Fragment } from 'react';
import styled from 'styled-components'
import ReactPlayer from 'react-player'


const Reels = (props) => {

  const Title = styled.div`
    margin-top: 45px;
    font-family: 'Lexend Deca', sans-serif;
    letter-spacing: 3px;
    border-radius: 40px;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 10px;
  `
  return (
    <Fragment>
    { props.seeNav ? null :
      <Fragment>
        <Title>Acting Reel</Title>
        <div id="vids">
        <ReactPlayer url='https://vimeo.com/264137125' width='360px' height='360px'/>
        <Title>More Footage</Title>
          <ReactPlayer url='https://vimeo.com/209432518' width='360px' height='360px' />
          <ReactPlayer url='https://youtu.be/xCwraZK1EVU' width='360px' height='360px' />
          <ReactPlayer url='https://youtu.be/4CBBexUo6lI' width='360px' height='360px' />
          <ReactPlayer url='https://youtu.be/NaRAbGV_xAE' width='360px' height='360px' />
          <ReactPlayer url='https://vimeo.com/214701364' width='360px' height='360px' />
          <ReactPlayer url='https://youtu.be/ENQGH-uYk34' width='360px' height='360px' />
        </div>
      </Fragment>
    }

    </Fragment>
  )
}

export default Reels
// <ReactPlayer url='https://vimeo.com/264137125' />
