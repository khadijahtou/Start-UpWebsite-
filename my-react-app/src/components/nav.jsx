import React from "react";
import Home from "./components/home";
import Portfolio from "./components/portfolio";
import Service from "./components/services";
import Logo from "./assets/logo.svg";
import { Link } from "react-router-dom";	
const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="content">
				<h1>Start</h1>
				<img src={Logo} alt="logo" />
				<ul>
					<Link to="/">Home</Link>
					<Link to="':/">Portfolio</Link>
					<Link to="">Service</Link>
					<Link to="">contactus</Link>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
