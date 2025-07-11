import React from 'react'
import './cards.css'
import landingPage from '../../assets/portfolio/landing-page.svg'
import webDesign from '../../assets/portfolio/web-design.svg'
import Rocket from '../../assets/portfolio/rocket-your-buisness.svg'
import Shopping from '../../assets/portfolio/shopping.svg'
import geometricShapes from '../../assets/portfolio/Geometric.svg'
import TrickOrTreats from '../../assets/portfolio/trickortreat.svg'
import Halloween from '../../assets/portfolio/halloween.svg'
import virtualRiality from '../../assets/portfolio/V-R.png'


function Cards() {
    return (
        
        <div className="card">
        <img src={landingPage} alt="" srcset="" />
        <img src={webDesign} alt="" srcset="" />
        <img src={Rocket} alt="" srcset="" />
        <img src={Shopping} alt="" srcset="" />
        <img src={geometricShapes} alt="" srcset="" />
        <img src={TrickOrTreats} alt="" srcset="" />
        <img src={Halloween} alt="" srcset="" />
        <img src={virtualRiality} alt="" srcset="" />
        </div>
        
    )
}

export default Cards
