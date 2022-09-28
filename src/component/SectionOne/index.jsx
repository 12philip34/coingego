import React from 'react'
import "./style.css";
import "../LaptopGrid/style.css";
import cryptoCap from "../../image/cryptoCap.png";
import phone from "../../image/whyus.jpg";
import easy from "../../image/Easy-to-transact.png";
import Loss from "../../image/No-loss.png";
import secure from "../../image/Security.png";

const SectionOne = () => {
  return (
    <div className='SectionOne'>
      <h1 className='future'>Invest in the future with confidence..</h1>
      <div className="threeGrid">
        <label>
          <img src={easy} alt="easy.png" />
        </label>
        <label className="label">
          <img src={Loss} alt="Loss.png" />
        </label>
        <label>
          <img src={secure} alt="secure.png" />
        </label>
      </div>
      <div className="laptopGrid aboutCrypto">
        <section>
          <h3>How to compare Cryptocurrencies Market Cap?</h3>
          <p>
            As a financial metric, market cap allows you to
            compare the total circulating value of one cryptocurrency with another
          </p>
          <p>
            They typically consist of protocols that have
            demonstrated track records, and have a vibrant
            ecosystem of developers maintaining and enhancing
            the protocol, as well as building new projects on top of them.
          </p>
        </section>

        <img src={cryptoCap} alt="cryptoCap.png" />

      </div>
      <div className="laptopGrid">
        <img src={phone} alt="cryptoCap.png" />
        <section>
          <h3>
            How does CoinGecko Calculate Cryptocurrency Prices?
          </h3>
          <p>
            The price is calculated using a global
            volume-weighted average price formula which is based on the
            pairings available on different exchanges of a particular
            crypto asset.
          </p>
          <p>
            For examples and more detailed information on how we track
            cryptocurrency prices and other metrics.
          </p>
        </section>
      </div>
    </div>
  )
}

export default SectionOne;