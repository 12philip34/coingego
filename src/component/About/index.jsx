import React from 'react';
import "./style.css";
import "../TopSection/style.css"
import Backdrop from "../../image/backdrop.png";
import Plant from "../../image/Plant-Bitcoin.png";
// import binance from "../../image/bi.png";
// import indox from "../../image/indox.png";
// import coinbase from "../../image/coinbase.png";
// import coinmarket from "../../image/coimmarket.png"
// import FontAwesomeIcon from "react-icons";


function About() {
    return (
        <div>
            <div className="aboutContainer">
                <section className="aboutUs">
                    <div className="aboutTextOne">
                        <h3>About_Us</h3>
                        <h1>
                            Accelerate the worlds transition
                        </h1>
                    </div>
                    <div className="aboutTextTwo">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nobis a, similique voluptatem consequuntur distinctio quas iste atque hic
                            earum accusamus!
                        </p>
                        <div className="gridButton" style={{ marginTop: 20, }}>
                            <button style={{ padding: 10, }}>More About Us</button>
                        </div>
                    </div>
                </section>
                <section className="imageSection">
                    <img className='imageTextImage' src={Backdrop} alt="tech.logo" />
                    <div className="imageText">
                        <div className="textOne">
                            <h3>Fiat & Crypto Payments</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Magni numquam ex provident
                                tempora neque consectetur?
                            </p>
                        </div>
                        <div className="textTwo">
                            <h3>Customizable Flows</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Magni numquam ex provident
                                tempora neque consectetur?
                            </p>
                        </div>
                        <div className="textThree">
                            <h3>Scalable Profits</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Magni numquam ex provident
                                tempora neque consectetur?
                            </p>
                        </div>
                    </div>
                </section>
                <section className="chooseUsSection">
                    <div className="chooseUs">
                        <h3>Why Choose Us</h3>
                        <h1>
                            Safe, guaranteed, and easy to use
                        </h1>
                        <p>
                            Lorem ipsum dolor sit,
                            amet consectetur adipisicing elit.
                            Unde similique voluptatum enim magnam ab assumenda!
                        </p>
                        <button>Learn More</button>
                    </div>
                    <div className="chooseUsRight">
                        <label>
                            <h1>Safe and secure</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sit, sint.
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                        </label>
                        <label>
                            <h1>Good investment</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sit, sint.
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                        </label>
                        <label>
                            <h1>Integrated app</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sit, sint.
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                        </label>
                        <label>
                            <h1>Multi Curency Support</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sit, sint.
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                        </label>
                    </div>
                </section>
                <section className="stepSuccess">
                    <div className="successCenter">
                        <h3>STEP BY STEP GUIDE</h3>
                        <h1>Easy Steps to Success</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Quisquam sapiente qui dolore
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, pariatur!</p>
                    </div>
                    <div className="successGrid">
                        <div className="successGridOne successGrid">
                            <h2>Create Wallet</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, iste.</p>
                        </div>
                        <div className="successGridTwo successGrid">
                            <h2>Make payment</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quibusdam!</p>
                        </div>
                        <div className="successGridThree successGrid">
                            <h2>buy and sell</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, pariatur.</p>
                        </div>
                    </div>
                </section>
                <section className='stepSuccess'>
                    <div className="successCenter">
                        <h2>Features</h2>
                        <h1>All you need is here!!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, magnam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>

                    <div className="threeGridFeatures">
                        <label>
                        <div className="featuresTextOne">
                            <h2>Affordable Plans</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequatur!</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="featuresTextOne">
                            <h2>Best Plans</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequatur!</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        </label>
                        <div className="featuresTextOneImage">
                            <img src={Plant} alt="CryptoSwap" />
                        </div>
                       <label>
                       <div className="featuresTextOne">
                            <h2>Guided By Experts</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequatur!</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="featuresTextOne">
                            <h2>24/7 Live Support</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequatur!</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                       </label>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About;