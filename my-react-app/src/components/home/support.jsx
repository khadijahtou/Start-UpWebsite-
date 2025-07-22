import React from "react";
import "./support.css";
import supportImage from "../../assets/home/Support.svg"; // Adjust the path as necessary

function Support() {
	return (
		<div className="support-content">
			<div className="supportImage">
				<img src={supportImage} alt="Support Image" srcSet="" />
			</div>
			<div className="supportText">
				<h2 className="supportsubheader">Lorem ipsum dolor sit amet consectetur </h2>
				<p className="supportbody">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
					nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
					voluptate culpa nesciunt delectus iste?
				</p>
				<button className="supportbutton">Learn More</button>
			</div>
			
		</div>
	);
}

export default Support;
