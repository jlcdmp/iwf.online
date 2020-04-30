import React, { Component } from 'react';

import '../CSS/Jumbo.css'

class Jumbo extends Component {




  render() {


    return (
      <div className='Header-Open' ref={this.props.props}>

        <p>we are <span id='gainsboro'>Wall & Floor Tilling</span> specialists based in <span id='gainsboro'>Manchester</span>,</p>

        <p>operating nationwide domestical and comericial  . </p>
        <div class='arrow'>
          <span></span>
        </div>
      </div>
    );


  }

}


export default Jumbo;