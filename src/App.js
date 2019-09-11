import React, { Fragment } from 'react';
import './App.css';
import HomePage from './components/HomePage'
import About from './components/About'
import Resume from './components/Resume'
import Reels from './components/Reels'
import Footer from './components/Footer'
import Photos from './components/Photos'
import Contact from './components/Contact'
import Nav from './components/Nav'
import ExposedNav from './components/ExposedNav'
import StickyHeader from './components/StickyHeader'
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {

  state = {
    seeNav: false
  }

  // TODO: Refactor into one function
  // seeNav = () => { this.setState({ seeNav: !this.state.seeNav }) }

  seeNav = () => {
    console.log("seeNav in App")
    this.setState({ seeNav: !this.state.seeNav }, () => console.log(this.state))
   }

  hideNav = () => { this.setState({ seeNav: !this.state.seeNav })}

  render () {
    return (
      <Fragment>
          {this.state.seeNav ? <ExposedNav hideNav={this.hideNav} /> :
          <Nav seeNav={this.seeNav} />}
          <StickyHeader seeNav={this.state.seeNav} />
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} seeNav={this.state.seeNav} />} />

          <Route exact path="/about" render={(props) => <About {...props} seeNav={this.state.seeNav} />} />

          <Route exact path="/resume" render={(props) => <Resume {...props} seeNav={this.state.seeNav} />} />

          <Route exact path="/reels" render={(props) => <Reels {...props} seeNav={this.state.seeNav} />} />

          <Route exact path="/photos" render={(props) => <Photos {...props} seeNav={this.state.seeNav} />} />

          <Route exact path="/contact" render={(props) => <Contact {...props} seeNav={this.state.seeNav} />} />
        </Switch>
        <Footer/>
    </Fragment>
    )
  }

}

export default App;
