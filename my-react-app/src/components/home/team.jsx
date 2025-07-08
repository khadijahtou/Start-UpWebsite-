import React from "react"
import { Links } from "react-router-dom"
import "./team.css"
import janetImage from "../../assets/home/janet.svg"; // Adjust the path as necessary
import alexendraImage from "../../assets/home/alexendra.svg"; // Adjust the path as necessary
import pegImage from "../../assets/home/peg.svg"; // Adjust the path as necessary
import richardImage from "../../assets/home/richard.svg"; // Adjust the path as necessary

const Team = () => {
	return (
		<div className="team-content">
			<h2 className="team-header">Team</h2>
			<h3 className="talent"> Our Talent</h3>
			<h4>Lorem ipsum, dolor sit amet consectetur
				Suscipit nemo hic quos, ab,</h4>
			<div className="team-images">
				<div className="peg">
					<img src={pegImage} alt="Peg" />
					<h5 className="name">Peg Legge</h5>
					<p className="rank">CEO</p>
				</div>
				<div className="richard">
					<img src={richardImage} alt="Richard" />
					<h5 className="name">Richard Guerra</h5>
					<p className="rank">CTO</p>
				</div>
				<div className="alexendra">
					<img src={alexendraImage} alt="Alexendra" />
					<h5 className="name">Alexendra Stolz</h5>
					<p className="rank">DESIGNER</p>
				</div>
				<div className="janet">
					<img src={janetImage} alt="Janet" />
					<h5 className="name">Janet Bray</h5>
					<p className="rank">DEVELOPER</p>
				</div>
				
			</div>

			<button>Learn More</button>
		</div>
	);
};

export default Team;
