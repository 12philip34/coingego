import React from 'react';
import "./style.css";

function Footer() {
  return (
    <div>
          <section className='footer' id='contact'>
                <label>
                    <h1>DecoMarket</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur
                         adipisicing elit. Officiis, modi optio enim 
                         
                    </p>
                </label>
                <label>
                    <h1>Products</h1>
                    <ol>
                        <li>Converter</li>
                        <li>Exchanges</li>
                        <li>Crypto Earn</li>
                    </ol>
                </label>
                <label>
                    <h1>Pages</h1>
                    <ol>
                        <li>about us</li>
                        <li>sales guide</li>
                        <li>Token sales</li>
                    </ol>
                </label>
                <label>
                    <h1>Contacts</h1>
                    <ol>
                        <li>Tell: 09032127081(Whatsapp)</li>
                        <li><a href="https://nssienphilip.netlify.app/">Portfolio</a></li>
                        <li>Twitter: <a href=''>@Nssienphilip</a></li>
                    </ol>
                </label>
            </section>
    </div>
  )
}

export default Footer