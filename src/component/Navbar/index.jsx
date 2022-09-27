import React from 'react';
import "./style.css";
// import { NavLink } from 'react-bootstrap';

function Navbar() {
  return (
    <div>
      <section className="container">
        <nav className="navbar">
          <div className="logo">DecaMarket</div>
          {/* <ul className="nav-links">
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" className="hamburger">&#9776;</label>
            <div className="menu">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li className="services">
                <NavLink to="/services">Services</NavLink>
                <ul className="dropdown">
                  <li><NavLink to="#">Dropdown 1 </NavLink></li>
                  <li><NavLink to="#">Dropdown 2</NavLink></li>
                  <li><NavLink to="#">Dropdown 2</NavLink></li>
                  <li><NavLink to="#">Dropdown 3</NavLink></li>
                  <li><NavLink to="#">Dropdown 4</NavLink></li>
                </ul>
              </li>
              <li><NavLink to="/features">Features</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </div>
          </ul> */}
          <p className="concept">Volume your thinking up. Get details here!..</p>
        </nav>
      </section>
    </div>
  )
}

export default Navbar