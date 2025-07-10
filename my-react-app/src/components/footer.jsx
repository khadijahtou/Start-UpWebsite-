import React from 'react';

import Facebook from "../assets/facebook-icon.svg"
import Instagram from "../assets/instagram-icon.svg"
import Twitter from "../assets/twitter-icon.svg"
import Printerest from "../assets/pinterest-icon.svg"
import Ticktok from "../assets/tictok-icon.svg"
import Whatsapp from "../assets/whatsApp-icon.svg"
import Youtube from "../assets/youtube-icon.svg"
import "./footer.css";


function Footer() {
  return (
    <div className='footerContent'>
      <div className="footericons">
        <img src={Facebook} alt="Facebook-icon" srcset="" />
        <img src={Instagram} alt="Instagram" srcset="" />
        <img src={Twitter} alt="Twitter-icon" srcset="" />
        <img src={Printerest} alt="printerest" srcset="" />
        <img src={Ticktok} alt="tictok" srcset="" />
        <img src={Whatsapp} alt="whatsapp" srcset="" />
        <img src={Youtube} alt="" srcset="" />
      </div>
      <div className="footertext"> 
        <p>© Start, 2022. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer;
