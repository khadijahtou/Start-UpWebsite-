import React from 'react'
import { Link } from 'react-router-dom'
import './welcome.css'
import groupImage from '../../assets/home/groupimage.svg'
const Welcome = () => {
	return (
		<div className="welcome-content">
			<img
				src={groupImage}
				alt="Group Picture"
				srcset=""
				className="welcome-image"
			/>

			<div className="welcome-content-text">
				<h2>WELCOME</h2>
				<h3>Lorem ipsum dolor sit amet consectetur.</h3>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
					nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
					voluptate culpa nesciunt delectus iste?
				</p>
				<button className="explore">Explore</button>
			</div>
		</div>
	)
}

export default Welcome
