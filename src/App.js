import React, { Fragment } from 'react';
import './App.css';
import HomePage from './components/HomePage'
import About from './components/About'
import Nav from './components/Nav'
import ExposedNav from './components/ExposedNav'

class App extends React.Component {

  state = {
    seeNav: false
  }

  // TODO: Refactor into one function
  seeNav = () => { this.setState({ seeNav: !this.state.seeNav }) }

  hideNav = () => { this.setState({ seeNav: !this.state.seeNav })}

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
