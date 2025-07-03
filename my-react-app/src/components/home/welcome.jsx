import React from "react"
import {Link} from "react-router-dom"
import "./welcome.css"
import groupImage from "../../assets/home/groupimage.svg"
const Welcome = () => {
    return ( 
        <div className="welcomecontent">
            <div className="ContentText">
                    <h2>welcome</h2>
                    <h3 className="subheader">Lorem ipsum dolor sit amet consectetur.</h3>
                    <h5 className="text-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsa ipsam sint. Fugit unde dolorum totam asperiores dicta, magni eius aut cupiditate eveniet deleniti consequuntur aperiam?</h5>
                    
            </div>
                    <div>
                        <img src={groupImage} alt="Group Picture" srcset="" className="group-picture" />
                    </div>
            <button>Explore</button>
            <div>

            </div>
        </div>
    );
}

export default Welcome;