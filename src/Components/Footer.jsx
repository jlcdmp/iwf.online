import React from 'react';


const Footer = (props) => {



  return (
    <div className='Footer'>

      <span onClick={props.handleScrollNav} id='backTop'>To The Top ↑</span>


      <span>© 2020 Irlam Wall & Flooring .Ltd</span>

    </div>
  );
}



export default Footer
