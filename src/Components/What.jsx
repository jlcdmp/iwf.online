import React, { Component } from 'react';

class What extends Component {
  state = {
  }


  render() {

    return (
      < div className='What' ref={this.props.props}>
        <div className='Services' id='Our Services'>
          <ul >
            <li>Bathroom's•</li>
            <li>Kitchen's•</li>
            <li>Entrance's•</li>
            <li>Showroom's</li>
            <li>Swimming Pool's•</li>
            <li>Glass</li>
            <li>Office's•</li>
            <li>Mosiac Design</li>
            <li>Student</li>
            <li>Accomdation's</li>
            <li>Comercial Build's•</li>
            <li>Domestic Propertie's</li>
            <li>Municipal Lot's•</li>
            <li>Limestone•</li>
            <li>Stone•</li>
            <li>Ceramic•</li>
            <li>Bespoke Tile's•</li>
            <li>Custom Order's•</li>
          </ul>



          <p></p>



        </div>
        <div className='What-Words'>
          <p>You Name It We Can Do It.</p>
          <span id='promise'>
            Firstly, all of our work is carried out to British Standards.
            <br />
            •
            <br />
            We are fully qualified to NVQ Level 2, proud members of the Tile Association and CSCS registered.
            <br />
            •
            <br />
            Not only do we provide the highest quality workmanship, our outstanding customer service and reliability sets us apart from the competition.
            <br />
            •
            <br />
            In addition, you deal with one person from the beginning of the project to the end because we do not sub-contract any of our work.
            <br />
            •
            <br />
            Most of all, our work is guaranteed. And that's our promise.
          </span>
        </div>
      </div >
    );


  }
}
export default What;

