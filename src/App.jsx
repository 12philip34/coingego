import React from 'react';
import "./App.css";
import About from './component/About';
import Navbar from './component/Navbar';
import TopSection from './component/TopSection';

function App() {
  return (
    <div className='App'>
        <Navbar />
        <TopSection />
        <About />
    </div>
  )
}

export default App