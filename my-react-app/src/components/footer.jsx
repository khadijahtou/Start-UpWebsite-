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
        <img src={Facebook} alt="Facebook-icon" srcset="" className='facebook' />
        <img src={Instagram} alt="Instagram" srcset="" className='instagram'/>
        <img src={Twitter} alt="Twitter-icon" srcset=""  className='twitter'/>
        <img src={Printerest} alt="printerest" srcset="" className='pinterest' />
        <img src={Ticktok} alt="tictok" srcset="" className='tictok' />
        <img src={Whatsapp} alt="whatsapp" srcset="" className='whatsapp' />
        <img src={Youtube} alt="" srcset=""  className='youtube'/>
      </div>
      <div className="footertext"> 
        <p>© Start, 2022. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer;
