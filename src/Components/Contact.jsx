import React, { Component } from 'react';



class Contact extends Component {
  state = {}

  render() {
    return (

      <div className='Contact'>

        <div className='Social-Buttons-Container'>

          <div className='social-buttons'>
            <a href="https://twitter.com/iwftiling" class="icon-button twitter">
              <i class="icon-twitter"></i>
              <span></span>
            </a>
            <a href="https://facebook.com" class="icon-button facebook"><i class="icon-facebook"></i><span></span></a>
          </div>


        </div>

        <div className='Section-Container'>

          <div className='Touch-Container'>
            <span className="Page-Heading">Get in touch today.</span>
            <p>Whether you already have a design in mind or you want our experience and advice to help you decide, we can take you through all the many options and alternatives so that you know  what type of tiles to use and what finishing materials are appropriate for the look you want to achieve.</p>

            <p>If you're a homeowner renovating your bathroom or
              kitchen, a restaurant, pub, hotel or shop owner looking to
              raise the standard of your facilities. Or a major blue chip
              company in need of specialised tilers who can achieve the look
              you desire, IWF Tiling in Manchester consistently exceeds the
              expectations of each and every one of our many different types
            of client.</p>
          </div>

          <div className='Contact-Section-2' >
            <div className='Reviews-Container'>
              <p className='Page-Heading'>What our customers say...</p>



              <ul className='Review-Container'>
                <li className='Review'>''Pellentesque ornare dui eu arcu interdum, nec auctor eros rutrum. Integer cursus enim quis imperdiet elementum. Cras ornare hendrerit aliquam. Maecenas vitae elementum massa. Vestibulum ante ipsum primis in faucibus.''</li>
                <li className='Reviewer'>- Joe Bloggs</li>
              </ul>








            </div>







            <div className='Item-Container'>

              <div className='Contact-Item'>

                <svg xmlns="http://www.w3.org/2000/svg" ><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" /></svg>

                <p>phone</p>
                <span>00000000000</span>

              </div>

              <div className='Contact-Item'>
                <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                  <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                </svg>

                <p>email</p>
                <span>iwf.tiling@live.co.uk</span>
              </div>

              <div className='Contact-Item'>
                <svg xmlns="http://www.w3.org/2000/svg" ><path d="M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                <p>address</p>
                <span>2 Woodbine Terrace, Irlam, Manchester</span>
              </div>

            </div>



          </div>


        </div>

      </div>
    );
  }
}

export default Contact;