import React from "react"
import {Link} from "react-router-dom"
import "./welcome.css"
import groupImage from "../../assets/home/groupimage.svg"
const Welcome = () => {
    return ( 
        <div className="welcomecontent">
             <div className="welcomeImage">
                        <img src={groupImage} alt="Group Picture" srcset="" className="group-picture" />
                    </div>
            <div className="contentText">
                    
                    <h2>WELCOME</h2>
                    
                    <h3 className="subheader">Lorem ipsum dolor sit amet consectetur.</h3>
                    <h4 className="text-body">Lorem ipsum, dolor sit amet consectetur adipisicing 
                        elit. Suscipit nemo hic quos, ab, dolor aperiam nobis 
                        cum est eos error ipsum, voluptate culpa nesciunt 
                        delectus iste?</h4>
                    
            </div>
                   
            <button className="explore">Explore</button>
            <div>

            </div>
        </div>
    );
}

export default Welcome;