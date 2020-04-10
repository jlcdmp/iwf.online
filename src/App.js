import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import About from './Components/About';
import What from './Components/What';
import Who from './Components/Who';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">

      <Navigation />

      <div className='PageContentStore'>
        <div className='Content'>
          <p id='topline'>Irlam Wall & Flooring .Ltd</p>
          <Header />
          <About />
          <What />
          <Who />
        </div>
        <Footer />
      </div>

    </div>
  );
}
export default App;