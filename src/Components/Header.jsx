import React, { Component } from 'react';

class Header extends Component {




  render() {


    return (
      <div className='Header-Open' ref={this.props.props}>

        <p>We are Wall & Floor tilling specialists based in Manchester</p>

        <p>Operating nationwide domestical and comericial.</p>
        <div class='arrow'>
          <span></span>
        </div>
      </div>
    );


  }

}


export default Header;