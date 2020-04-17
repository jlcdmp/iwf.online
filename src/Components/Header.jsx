import React, { Component } from 'react';

class Header extends Component {




  render() {


    return (
      <div className='Header-Open' ref={this.props.props}>

        <p>We are a Wall & Floor tilling specialists based in Manchester</p>

        <p>Operating nationwide domestical and comericial.</p>

      </div>
    );


  }

}


export default Header;