import React from 'react';


const Who = (props) => {

  return (
    <div className='Who' ref={props.props}>

      <span className='Page-Heading'>Our Client's & Contact's</span>
      <p>Working predominantly in Manchester and the North West, our skilled tilers have contributed to many prestigious projects for hotels, pubs, restaurants, retail chains and leisure companies and high profile clients such as Salford Cathedral and Media City. </p>

      <p>Some of our clients include:</p>

      <div className='LogoStore'>
        <img src={require("../images/1200px-Laing_O'Rourke_logo.svg.png")} />

        <img src={require('../images/1280px-Workspace_Group_logo.svg.png')} />

        <img src={require("../images/mediacitylogo.png")} />


        <img src={require('../images/download (2).png')} />

        <img src={require('../images/download.png')} />

        <img src={require('../images/manchester-cathedral-logo.jpg')} />

        <img src={require("../images/Bentley-symbol-black-1920x1080.png")} />
        <img src={require('../images/1280px-Audi_logo_detail.svg.png')} />



        <img src={require("../images/junkyard-golf-club-2019-e1575031027320.jpg")} />

        <img src={require('../images/Ikea_logo.svg')} />
      </div>



      <p>We have ‘preferred supplier’ status for a number of firms across the UK and have retained contracts with these and other companies for many years.</p>

      <div>

      </div>

    </div >
  );
}

export default Who;