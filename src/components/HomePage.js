import React from 'react';
import styled from 'styled-components';

const HomePage = (props) => {

  const FlexDiv = styled.div`
    display: flex;
    justify-content: center;
  `

  return (
    <div>
      {props.seeNav ? null : <FlexDiv>
        <img id="homepage-img" src="https://res.cloudinary.com/flatiron-school/image/upload/v1568152441/Headshots/DSC_6229.jpg" alt="ali stone" />
      </FlexDiv>}
    </div>
  )
}

export default HomePage
