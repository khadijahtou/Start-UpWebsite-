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
			<div className="team-text">
				<h2 className="team-header">Team</h2>
			<h3 className="talent"> Our Talent</h3>
			<h4 className= "textbody">Lorem ipsum, dolor sit amet consectetur</h4>
			</div>
			
			<div className="team-images">
				<div className="peg">
					<img src={pegImage} alt="Peg" />
					<div className="identification">
						<h5 className="name">Peg Legge</h5>
						<p className="rank">CEO</p>
					</div>
					
				</div>
				<div className="richard">
					<img src={richardImage} alt="Richard" />
					<div className="identification">
						<h5 className="name">Richard Guerra</h5>
						<p className="rank">CTO</p>
					</div>
					
				</div>
				<div className="alexendra">
					<img src={alexendraImage} alt="Alexendra" />
					<div className="identification">
							<h5 className="name">Alexendra Stolz</h5>
							<p className="rank">DESIGNER</p>
					</div>
				
				</div>
				<div className="janet">
					<img src={janetImage} alt="Janet" />
					<div className="identification">
						<h5 className="name">Janet Bray</h5>
						<p className="rank">DEVELOPER</p>
					</div>
					
				</div>
				
			</div>

			<button className="teambutton">Learn More</button>
		</div>
	);
};

export default Team;
