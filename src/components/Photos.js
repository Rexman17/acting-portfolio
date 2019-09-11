import React, { Fragment } from 'react';


const Photos = (props) => {

  return (
    <div id="flex-imgs-cont">
      { props.seeNav ? null :
        <Fragment>
          <div>
            <img className="headshot" src="https://res.cloudinary.com/flatiron-school/image/upload/v1568152441/Headshots/DSC_6229.jpg" alt="pic1" />
            <img className="headshot" src="https://res.cloudinary.com/flatiron-school/image/upload/v1568139049/Headshots/DSC_6054.jpg" alt="pic3" />
            <img className="headshot" src="https://res.cloudinary.com/flatiron-school/image/upload/v1568139054/Headshots/DSC_6106.jpg" alt="pic5" />
          </div>

          <div>
            <img className="headshot" src="https://res.cloudinary.com/flatiron-school/image/upload/v1568139069/Headshots/DSC_6208.jpg" alt="pic2" />
            <img className="headshot" src="https://res.cloudinary.com/flatiron-school/image/upload/v1568139047/Headshots/DSC_5987.jpg" alt="pic4" />
            <img className="headshot" src="https://res.cloudinary.com/flatiron-school/image/upload/v1568139068/Headshots/DSC_6209.jpg" alt="pic4" />
          </div>
        </Fragment>
      }

    </div>
  )
}

export default Photos;
