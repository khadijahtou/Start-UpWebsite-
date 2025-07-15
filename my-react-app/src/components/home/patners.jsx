import React from "react"
import {Link} from "react-dom"
import "./patner.css"
import Google from "../../assets/home/google.svg"
 import Airbnb from "../../assets/home/airbnb_.svg"
import Microsoft from "../../assets/home/Microsoft.svg"
import Facebook from "../../assets/home/facebook.svg"
import Spotify from "../../assets/home/spotify.svg"
const Patner = () => {
    return (  
        <div className="patnercontent">
            <div className="patnertext">
                <h2 className="patnerheader">PATNERS</h2>
                <h3 className="patnerSubheader">Lorem, ipsum dolor.</h3>
                <p className="patnerBody">Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit.</p>

            </div>
             <div className="patner-images">
                <img src={Google} alt="googleIcon" srcset="" />
                <img src={Microsoft} alt="MicroSoft" srcset="" />
                <img src={Airbnb }alt="Airbnb" srcset="" /> 
                <img src={Facebook} alt="Facebook" srcset="" />
                 <img src={Spotify} alt="spotify" srcset="" /> 
            </div> 
            <div className="button">
                <button className="patnerlearnMore">Learn more</button>
            </div>
        </div>
    );
}

export default Patner;