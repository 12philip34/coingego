import React from 'react';
import "./style.css";
import Facebook from "../../image/facebook.png";
import Twitter from "../../image/twitter.png";
import Github from "../../image/github.png";
import Linkedin from "../../image/linkedin.png";

const Footer = () => {
	return (
		<div>
			<footer className="footer">
				<div className="footer-container">
					<div className="row">
						<div className="footer-col">
							<h4>company</h4>
							<ul>
								<li><a href="#">about us</a></li>
								<li><a href="#">our services</a></li>
								<li><a href="#">privacy policy</a></li>
								<li><a href="#">Crypto program</a></li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>get help</h4>
							<ul>
								<li><a href="#">FAQ</a></li>
								<li><a href="#">shipping</a></li>
								<li><a href="#">returns</a></li>
								<li><a href="#">order status</a></li>
								<li><a href="#">payment options</a></li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>online Cryptomarket</h4>
							<ul>
								<li><a href="#">learn</a></li>
								<li><a href="#">Organize</a></li>
								<li><a href="#">Trade</a></li>
								<li><a href="#">Invest</a></li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>follow us</h4>
							<div className="social-links">
							<a rel='noopener noreferrer' href="https://www.facebook.com/Nssienphilip/" target="_blank"> <img id='iconsFooter' src={Facebook} alt="facebook.com" /></a>
							<a rel='noopener noreferrer' href="https://twitter.com/Nssienphilip" target="_blank"><img id='iconsFooter' src={Twitter} alt="twitter.com" /></a>
							<a rel='noopener noreferrer' href="https://www.linkedin.com/in/philip-nssien/" target="_blank"> <img id='iconsFooter' src={Linkedin} alt="Linkedin.com" /></a>
							<a rel='noopener noreferrer' href="https://github.com/12philip34" target="_blank"><img id='iconsFooter' src={Github} alt="Github.com" /></a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer;