import React from 'react';
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';

const Twitter = (props) => {

  return (
    <div className='Socials' ref={props.props}>

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
              tweetLimit: "5",
            }}
          ></TwitterTimelineEmbed>
        </div>
      </section>
    </div>
  );
}
export default Twitter;