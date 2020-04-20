import React from 'react';
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';

const Social = (props) => {



  return (
    <div className='Socials' ref={props.props}>


      <div className='Reviews'>
        <p id='topper'>Always using the highest quality materials plus expert knowledge of the tiling industry is how we stay up-to-date with changing technologies and techniques.</p>
        <p>What our customers say..</p>
        <ul className='Review-Container'>
          <li className='Review'>''Pellentesque ornare dui eu arcu interdum, nec auctor eros rutrum. Integer cursus enim quis imperdiet elementum. Cras ornare hendrerit aliquam. Maecenas vitae elementum massa. Vestibulum ante ipsum primis in faucibus.''</li>
          <li className='Reviewer'>- Joe Bloggs</li>
        </ul>
        <ul className='Review-Container' >
          <li className='Review' >''Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque molestie purus non massa ultrices, eu.''</li>
          <li className='Reviewer' >- John Smith</li>
        </ul>
        <ul className='Review-Container' >
          <li className='Review' >''Pellentesque ipsum erat, condimentum et lacinia a, aliquet vel.''</li>
          <li className='Reviewer'>- Sandy Cheeks</li>
        </ul>
        <div className='Mini-Contact'>
          <div className='Contact-Words'>
            <p id='touch'>Get in touch today </p>
            <p id='touch-info'>If you are seeking expert, affordable tiling services for your commercial or domestic property, then contact us today.</p>

          </div>



          <div className='Item-Container'>


            <div className='Contact-Item'>
              <div id='title'>
                <svg xmlns="http://www.w3.org/2000/svg" ><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" /></svg>
                <p>phone</p>
              </div>
              <span>00-000-0000</span>
            </div>
            <div className='Contact-Item'>
              <div id='title'>
                <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" /></svg>
                <p>email</p>
              </div>
              <span>000@000.000</span>          </div>
            <div className='Contact-Item'>
              <div id='title'>
                <svg xmlns="http://www.w3.org/2000/svg" ><path d="M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                <p>address</p>
              </div>
              <span>0000000000000</span>
            </div>

          </div>


        </div>
      </div>
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
export default Social;