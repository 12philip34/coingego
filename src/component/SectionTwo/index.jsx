import React from 'react'
import "./style.css";
import "../LaptopGrid/style.css";
import cryptoCap from "../../image/cryptoCap.png";
import phone from "../../image/phone.png";

const SectionTwo = () => {
  return (
    <div className='SectionOne'>
      <div className="laptopGrid">
        <section>
          <h3>
          Why are Cryptocurrency Prices Different on Exchanges?
          </h3>
          <p>
          You may notice that cryptocurrencies listed 
          on different exchanges have different prices.
          </p>
          <p>
          The reasons for this are complex, but simply put cryptocurrencies are traded 
          on different exchanges and across different markets with varying economic 
          conditions, liquidity, trading pairs, and offerings (e.g. derivatives / leverage)
           which all influence price in their own way.
          </p>
        </section>
        <img src={phone} alt="cryptoCap.png" />
      </div>
    </div>
  )
}

export default SectionTwo;