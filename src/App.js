import React, { Fragment } from 'react';
import './App.css';
import HomePage from './components/HomePage'
import About from './components/About'
import Resume from './components/Resume'
import Reels from './components/Reels'
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
          {this.state.seeNav ? <ExposedNav hideNav={this.hideNav} /> :   <Nav seeNav={this.seeNav} />}
          <StickyHeader />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/reels" component={Reels} />
          <Route exact path="/photos" component={Photos} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
    </Fragment>
    )
  }

}

export default App;
