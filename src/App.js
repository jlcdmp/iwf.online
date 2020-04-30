import React, { Component } from 'react';
import './App.css'

import Jumbo from './Components/Jumbo';
import Nav from './Components/Nav';
import Intro from './Components/Intro';
import Services from './Components/Services';
import Who from './Components/Who';
import Footer from './Components/Footer';
import Break from './Components/PageBreak';
import Contact from './Components/Contact';

class App extends Component {
  state = {
    homeRef: React.createRef(),
    servRef: React.createRef(),
    newsRef: React.createRef(),
    topRef: React.createRef(),
    active: false,
  }

  render() {
    return (
      <div className="App">
        <Nav handleScrollNav={this.handleScrollNav} addClass={this.addClass} />
        <div className='PageContentStore'>
          <div className='Content'>
            <p id='topline' ref={this.state.topRef}> Irlam Wall & Flooring .Ltd</p>
            <Jumbo props={this.state.homeRef} />
            <Intro />
            <Services props={this.state.servRef} />
            <Break />
            <Who />
            <Contact />
          </div>
          <Footer props={this.state.topRef} handleScrollNav={this.handleScrollNav} />
        </div>
        <div className={`overlay-${this.state.active === true ? "active" : null}`} ></div>
      </div>
    );
  }

  addClass = () => {
    this.setState({ active: !this.state.active })
  }

  handleScrollNav = event => {

    console.log(event.target.innerText)

    const clicked = event.target.innerText
    const options = { behavior: 'smooth', block: 'start' }

    if (clicked === 'Home') {
      this.state.homeRef.current.scrollIntoView(options)
    } else if (clicked === 'Our Services') {
      this.state.servRef.current.scrollIntoView(options)
    } else if (clicked === 'News') {
      this.state.newsRef.current.scrollIntoView(options)
    } else if (clicked === 'To The Top ↑') {
      this.state.topRef.current.scrollIntoView(options)
    } else {
      console.log('Did Not Match Any Conditions')
    }
  }
}

export default App;