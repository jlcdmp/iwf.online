import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import About from './Components/About';
import What from './Components/What';
import Who from './Who';
import Footer from './Footer';

function App() {
  return (

    <div className="App">

      <div className='PageContentStore'>
        <Navigation />
        <div className='PageContent'>
          <Header />
          <About />
          <What />
          <Who />
        </div>
      </div>

      <div className='FooterStore'>
        <Footer />
      </div>

    </div>
  );
}

export default App;
