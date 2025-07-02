import React from "react"
import {Link} from "react-dom"
import Google from "./assets/home/google.svg"
import Airbnb from "./assets/home/airbnb.svg"
import Microsoft from "./assets/home/Microsoft.svg"
import Facebook from "./asserts/home/facebook.svg"
import Spotify from "./assets/home/spotify"
const Patner = () => {
    return (  
        <div className="content">
            <div className="text">
                <h3 className="header">PATNERS</h3>
                <h2>Lorem, ipsum dolor.</h2>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                <button>Learn more</button>

            </div>
            <div className="images">
                <img src="Google" alt="googleIcon" srcset="" />
                <img src="Microsoft" alt="MicroSoft" srcset="" />
                <img src="Airbnb" alt="Airbnb" srcset="" />
                <img src="Facebook" alt="Facebook" srcset="" />
                <img src="Sportify" alt="sportify" srcset="" />
            </div>
            <div className="button">
                <button className="learnMore">Learn more</button>
            </div>
        </div>
    );
}

export default Patner;