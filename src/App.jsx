import React from 'react';
import "./App.css";
import About from './component/About';
import Footer from './component/Footer';
import GridProps from './component/GridProps';
import Navbar from './component/Navbar';
import TopSection from './component/TopSection';
import CryptoSwap from "./image/Crypto-Swap-Exchange-3D-Illustration.png";
import Machine from "./image/Machine.png";


function App() {
  return (
    <div className='App'>
        <Navbar />
        <TopSection />
        <About />
        <GridProps
        
          h3 = "THE VISION"
          h1 = "Users from all over the world"
          p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit"
          secondp = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          button = "Exchanges"
          logo={ <img className='image' style={{
            width: 200,
          }}  src={CryptoSwap} alt="logo.png"/>}
          />
          <GridProps 
          logo={<img className='image' style={{
            width: 200,
          }} src={Machine} alt="logo.png" />}

          h3= "PROFITABLE BLOCKCHAIN"
          h1= "Trusted Platform"
          p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit"
          secondp = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          button = "Total Global Node"
          />
          <Footer />
    </div>
  )
}

export default App