import React from 'react';
import laptop from "../../image/laptop.png";
import "./style.css";

const LaptopGrid = () => {
    return (
        <div>
            <div className="laptopGrid">
                <section>
                    <h1>What is Crypto Market Cap?</h1>
                    <p>
                        Crypto market cap is the total value of all the coins of a particular
                        cryptocurrency that have been mined or are in circulation.
                    </p>
                    <p>
                        Market capitalization is used to determine the ranking of cryptocurrencies.
                        The higher the market cap of a particular crypto coin, the higher
                        its ranking and share of the market.
                    </p>
                    <button>Official</button>
                </section>
                    <img src={laptop} alt="laptop.png" />
            </div>
        </div>
    )
}

export default LaptopGrid;