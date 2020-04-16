import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import About from './Components/About';
import What from './Components/What';
import Who from './Components/Who';
import Footer from './Components/Footer';
// import scrollToComponent from 'react-scroll-to-component';
import Break from './Components/PageBreak';
import Social from './Components/Social';
import Break2 from './Components/PageBreak2';

class App extends Component {



  myRef = React.createRef();

  state = {
    value: ''
  }



  render() {
    return (
      <div className="App">

        <Nav handleClick={this.handleClick} />

        <div className='PageContentStore'>
          <div className='Content'>
            <p id='topline'>Irlam Wall & Flooring .Ltd</p>
            <Header />
            <About />
            <Break />

            <What props={this.myRef} />

            <Social props={this.myRef} />
            <Break2 />
            <Who />
          </div>

          <span onClick={this.handleClick} id='topline' style={{ cursor: "pointer" }} >Back To The Top ↑</span>
          <Footer />
        </div>

      </div>
    );
  }


  handleClick = event => {
    event.persist()

    const elementToScrollTo = this.myRef.current

    let name = `#${event.target.innerText}`




    elementToScrollTo.scrollIntoView({ behavior: 'smooth', block: 'start' })

    // this.myRef.current.scrollIntoView({
    //   behaivour: 'smooth',
    //   block: 'end'
    // })

    // const anchor = document.querySelector(`#${event.target.id}`)

    // anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
export default App;