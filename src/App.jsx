import React from 'react';
import "./App.css";
import CoinBase from './CoinBase';
import Footer from './component/Footer';
import LaptopGrid from './component/LaptopGrid';
import Navbar from './component/Navbar';
import SectionOne from './component/SectionOne';
import SectionTwo from './component/SectionTwo';
import Introduction from './component/TopLayout';



const App = () => {


  return (
    <div className='App'>
      <Navbar />
      <Introduction />
      <LaptopGrid />
      <SectionOne />
      <CoinBase />
      <SectionTwo/>
      <Footer />
    </div>
  );
};

export default App;