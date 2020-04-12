import React, { Component } from 'react';
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';

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


          <p id='promise'>Not only do we provide the highest quality workmanship, our outstanding customer service and reliability sets us apart from the competition. What’s more, all of our work is guaranteed.</p>

        </div>

        <div className='Socials'>

          <p>Always using the highest quality materials plus expert knowledge of the tiling industry – that is how we stay up-to-date with changing technologies and techniques.</p>


          <section className="twitterContainer">


            <TwitterFollowButton
              screenName={'iwftiling'}
            />


            <div className="twitter-embed">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="iwftiling"
                noFooter={true}
                options={{
                  tweetLimit: "3",
                }}
              ></TwitterTimelineEmbed>
            </div>
          </section>
        </div >
      </div >
    );
  }




}
export default What;