import React from 'react';
import "./style.css";


function Navbar() {
  return (
    <div>
      <section className="container">
        <nav className="navbar">
          <div className="logo">DecaMarket</div>
          <ul className="nav-links">
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" className="hamburger">&#9776;</label>
            <div className="menu">
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li className="services">
                <a href="#services">Services</a>
                <ul className="dropdown">
                  <li><a href="#">Dropdown 1 </a></li>
                  <li><a href="#">Dropdown 2</a></li>
                  <li><a href="#">Dropdown 2</a></li>
                  <li><a href="#">Dropdown 3</a></li>
                  <li><a href="#">Dropdown 4</a></li>
                </ul>
              </li>
              <li><a href="#features">Features</a></li>
              <li><a href="#contact">Contact</a></li>
            </div>
          </ul>
        </nav>
      </section>
    </div>
  )
}

export default Navbar