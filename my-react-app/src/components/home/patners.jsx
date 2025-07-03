import React from "react"
import {Link} from "react-dom"
import "./patner.css"
// import Google from "./assets/home/google.svg"
// import Airbnb from "./assets/home/airbnb.svg"
// import Microsoft from "./assets/home/Microsoft.svg"
// import Facebook from "./assets/home/facebook.svg"
// import Spotify from "./assets/home/spotify"
const Patner = () => {
    return (  
        <div className="patnercontent">
            <div className="text">
                <h3 className="patnerheader">PATNERS</h3>
                <h2>Lorem, ipsum dolor.</h2>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>

            </div>
            {/* <div className="images">
                <img src="Google " alt="googleIcon" srcset="" />
                <img src="Microsoft" alt="MicroSoft" srcset="" />
                <img src="Airbnb" alt="Airbnb" srcset="" />
                <img src="Facebook" alt="Facebook" srcset="" />
                <img src="Sportify" alt="sportify" srcset="" />
            </div> */}
            <div className="button">
                <button className="learnMore">Learn more</button>
            </div>
        </div>
    );
}

export default Patner;