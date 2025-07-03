import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import "./nav.css"; // Assuming you have a CSS file for styling
const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="content">
				<div className="companyLogo">
					{ <img src={Logo} alt="logo" /> }
				<h1>Start</h1>
				</div>
				
				<ul>
					<Link to="/">Home</Link>
					<Link to="':/">Portfolio</Link>
					<Link to="">Service</Link>
					<Link to="">ContactUs</Link>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
