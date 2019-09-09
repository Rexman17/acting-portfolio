import React, { Fragment } from 'react';
import './App.css';
import HomePage from './components/HomePage'
import About from './components/About'
import Nav from './components/Nav'
import ExposedNav from './components/ExposedNav'

class App extends React.Component {

  state = {
    seeNav: false,
    hideNav: false
  }

  seeNav = () => {
    this.setState({ seeNav: !this.state.seeNav })
  }

  hideNav = () => {
    console.log("hide that nav!")
  }

  render () {
    return (
      <div>
        {
          this.state.seeNav ? <ExposedNav hideNav={this.hideNav} /> :
            <Fragment>
              <Nav seeNav={this.seeNav} />
              <HomePage />
            </Fragment>
        }

      </div>
    )
  }

}

export default App;
