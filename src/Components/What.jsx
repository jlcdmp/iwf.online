import React, { Component } from 'react';

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


class What extends Component {
  state = {}

  render() {
    return (

      <div className='What'>


        <div className='Services'>
          <ul>
            <li>Bathrooms,</li>
            <li>Kicthens,</li>
            <li>Ceramic,</li>
            <li>Porcelin,</li>
            <li>Geometric,</li>
            <li>Glass,</li>
            <li>Limestone,</li>
            <li>Marble,</li>
            <li>Mosiac,</li>
            <li>Natural Stone,</li>
            <li>Domestic,</li>
            <li>Comercial,</li>
            <li>Municipal,</li>
            <li>Swimming Pools,</li>
            <li>Show Rooms,</li>
            <li>Entrance's,</li>
            <li>Office Buildings,</li>
            <li>Student Accomodation</li>
          </ul>

          <p>You Name It, We Can Do It.</p>

        </div>


        <div className='Socials'>

          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="joeolcrl"
          />



        </div>




      </div>
    );
  }
}

export default What;