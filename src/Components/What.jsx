import React, { Component } from 'react';

class What extends Component {
  state = {
  }


  render() {

    return (
      < div className='What' ref={this.props.props}>
        <div className='Services' id='Our Services'>
          <ul >
            <li>Bathrooms</li>
            <li>•Kitchens •</li>
            <li>Entrance's</li>
            <li>•Showroom's</li>
            <li>Swimming Pool's</li>
            <li>•Glass</li>
            <li>Office Building's</li>
            <li>•Mosiac</li>
            <li>Student Accomodation's</li>
            <li>Comercial</li>
            <li>•Domestic •</li>
            <li>Municipal</li>
            <li>•Limestone •</li>
            <li>Natural Stone</li>
            <li>•Ceramic</li>
            <li>Porcelin •</li>
          </ul>
        </div>
        <div className='What-Words'>
          <p>You Name It, We Can Do It.</p>
          <span id='promise'>
            Firstly, all of our work is carried out to British Standards. We are fully qualified to NVQ Level 2, proud members of the Tile Association and CSCS registered.
          <br />
            <br />
            Not only do we provide the highest quality workmanship, our outstanding customer service and reliability sets us apart from the competition.
          <br />
            <br />
            In addition, you deal with one person from the beginning of the project to the end because we do not sub-contract any of our work.
          <br />
            <br />Most of all, our work is guaranteed. And that's a promise.
          </span>
        </div>
      </div >
    );


  }
}
export default What;

