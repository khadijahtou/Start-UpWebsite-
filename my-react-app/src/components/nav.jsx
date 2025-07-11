import React from "react";
import { useState } from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import "./nav.css";
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header>
			<nav className="navbar">
			<div className="content">
				<div className="companyLogo">
					{<img src={Logo} alt="logo" className="logo"/>}
					<h1>Start</h1>
				</div>

				<ul>
					<Link to="/">Home</Link>
					<Link to="/portfolio">Portfolio</Link>
					<Link to="/services">Service</Link>
					<Link to="/contactus">ContactUs</Link>
				</ul>
				</div>

				</nav>
				<div className="menubutton">
						<button className="md:hidden" text-gray-700 text-2xl 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu" >
					<svg
						width="32"
						height="22"
						viewBox="0 0 32 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<line y1="1" x2="32" y2="1" stroke="#fff" stroke-width="2" />
						<line y1="11" x2="32" y2="11" stroke="#fff" stroke-width="2" />
						<line y1="21" x2="32" y2="21" stroke="#fff" stroke-width="2" />
					</svg>
				</button>
			
				</div>
			
				
			{/* Mobile Menu */}
			{isOpen && (
				<div className="mobile-menu">
					<nav className="mobile-nav">
				<ul className="mobile-list">
					<li>
						<Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
					</li>
					<li>
						<Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
					</li>
					<li>
						<Link to="/services" onClick={() => setIsOpen(false)}>Service</Link>
					</li>
					<li>
						<Link to="/contactus" onClick={() => setIsOpen(false)}>ContactUs</Link>
					</li>
				</ul>
				</nav>
				</div>
			)}
		</header>
	);
}

export default Navbar;
