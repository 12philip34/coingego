import React from 'react';
import "./style.css";
import "../About/style.css";
// import CryptoSwap from "../../image/Crypto-Swap-Exchange-3D-Illustration.png";


function GridProps(props) {

    const { logo } = props;

    return (
        <div>
            <section className='GridProps'>
                <div className="propsText">
                    <h3>{props.h3}</h3>
                    <h1>{props.h1}</h1>
                    <p>{props.p}</p>
                    <p>{props.secondp}</p>
                    <button>{props.button}</button>
                </div>
                <div className="">
                <label>
                    {logo}
                </label>
                </div>
            </section>
          
        </div>
    )
}

export default GridProps