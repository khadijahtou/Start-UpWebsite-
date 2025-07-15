import React from "react";
import "./social.css"
import socialImage from "../../assets/home/social-image.svg"
const  Socials = () => {
    return ( 
        <div className="socialcontent">
            <img src ={socialImage} alt="" srcset="" /> 
            <div className="socialText">
                <h2 className="socialsubheader">Lorem ipsum dolor sit amet consectetur.</h2>
                <p className="socialbody">Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Provident minus voluptatibus 
                        sint obcaecati veritatis quaerat dolorem nostrum, 
                        itaque voluptatum laborum consequatur ipsam facere 
                        eligendi possimus deleniti.</p>
                        
                <button className="socialbutton">Learn More</button>
            </div>
            
        </div>
     );
}
 
export default Socials;