import React from 'react';
import "./style.css";
import "../TopSection/style.css"
import Backdrop from "../../image/backdrop.png";
// import FontAwesomeIcon from "react-icons";


function About() {
    return (
        <div>
            <section className="aboutContainer">
                <section className="aboutUs">
                    <div className="aboutTextOne">
                        <h3>About_Us</h3>
                        <h1>
                            Accelerate the world’s transition
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
                <section className="imageSection aboutUs">
                    <div className="imageText">
                        <div className="textOne">
                            <img className='' src="" alt="" />
                            {/* <FontAwesomeIcon icon="fa-solid fa-money-bill" /> */}
                            <h3></h3>
                            <p></p>
                        </div>
                        <div className="textTwo">
                            <img src="" alt="" />
                            <h3></h3>
                            <p></p>
                        </div>
                        <div className="textThree">
                            <img src="" alt="" />
                            <h3></h3>
                            <p></p>
                        </div>
                    </div>
                    <img style={{ width: 100, }} src={Backdrop} alt="" />
                </section>
            </section>
        </div>
    )
}

export default About;