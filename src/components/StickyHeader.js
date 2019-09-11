import React, { Fragment } from 'react';

const StickyHeader = (props) => {

  return (
    <Fragment>
      { props.seeNav ? null :
        <div id="header-div">
          <div id="Ali-Stone">
            ALI STONE
          </div>
            <div id="nyc-based-actress">
              NYC BASED ACTOR
            </div>
        </div>
      }
    </Fragment>
  )
}

export default StickyHeader
