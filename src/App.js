import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import About from './Components/About';
import What from './Components/What';
import Who from './Components/Who';
import Footer from './Components/Footer';
import Break from './Components/PageBreak';
import Social from './Components/Social';
import Break2 from './Components/PageBreak2';

class App extends Component {

  state = {
    homeRef: React.createRef(),
    servRef: React.createRef(),
    newsRef: React.createRef(),
    top: React.createRef()
  }

  render() {
    return (
      <div className="App">
        <Nav handleScrollNav={this.handleScrollNav} />

        <div className='PageContentStore'>

          <div className='Content'>
            <p id='topline' ref={this.state.top}>Irlam Wall & Flooring .Ltd</p>
            <Header props={this.state.homeRef} />
            <About />
            <Break />
            <What props={this.state.servRef} />

            <Social props={this.state.newsRef} />
            <Break2 />

            <Who />

          </div>
          <span id='topline' style={{ cursor: "pointer" }} onClick={() => this.state.top.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Back To The Top ↑</span>
          <Footer />
        </div>
      </div>
    );
  }



  handleScrollNav = event => {

    //  console.log(event.target.innerText)

    const clicked = event.target.innerText

    const options = { behavior: 'smooth', block: 'start' }

    if (clicked === 'Home') {
      this.state.homeRef.current.scrollIntoView(options)
    } else if (clicked === 'Our Services') {
      this.state.servRef.current.scrollIntoView(options)
    } else if (clicked === 'News') {
      this.state.newsRef.current.scrollIntoView(options)
    } else {
      console.log('Did Not Match Any Conditions')
    }




  }
}


export default App;