import React, { Fragment } from 'react';
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { device } from '../media-queries.js'


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

    @media ${device.tablet} {
      font-size: 25px;
    }
  `
  return (
    <Fragment>
    { props.seeNav ? null :
      <Fragment>
        <Title>Acting Reel</Title>
        <div id="vids">
        <ReactPlayer className="vid-clip" url='https://vimeo.com/264137125' />
        <Title>More Footage</Title>
          <ReactPlayer className="vid-clip" url='https://vimeo.com/209432518' />
          <ReactPlayer className="vid-clip" url='https://youtu.be/xCwraZK1EVU' />
          <ReactPlayer className="vid-clip" url='https://youtu.be/4CBBexUo6lI'/>
          <ReactPlayer className="vid-clip" url='https://youtu.be/NaRAbGV_xAE'/>
          <ReactPlayer className="vid-clip" url='https://vimeo.com/214701364'/>
          <ReactPlayer className="vid-clip" url='https://youtu.be/ENQGH-uYk34'/>
        </div>
      </Fragment>
    }

    </Fragment>
  )
}

export default Reels
// <ReactPlayer url='https://vimeo.com/264137125' />
