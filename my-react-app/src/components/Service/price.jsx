import React from 'react'
import './price.css'
import Tick from '../../assets/tick.svg' // Assuming you have a tick image in assets

function Price() {
  return (
    <div className='pricecontent'>
        <div className="package">
            <div className="pricetags">
                <h2 className="title">Basic</h2>
                <h3 className="cost">$100 <span>/month</span> </h3>
                <p className="discription"> Lorem ipsum, dolor sit amet 
                    consectetur adipisicing elit. Suscipit 
                    nemo hic quos, ab, dolor aperiam</p> 
            </div>
                <div  className="list">
                        <ul className="item">
                        <img src={Tick} alt="tick" srcset="" />
                        <p>Lorem ipsum, dolor sit</p> 
                        </ul>  <ul className="item">
                        <img src={Tick} alt="tick" srcset="" />
                        <p>Lorem ipsum, dolor sit</p> 
                        </ul>  <ul className="item">
                        <img src={Tick} alt="tick" srcset="" />
                        <p>Lorem ipsum, dolor sit</p> 
                        </ul>  <ul className="item">
                        <img src={Tick} alt="tick" srcset="" />
                        <p>Lorem ipsum, dolor sit</p> 
                        </ul>  <ul className="item">
                        <img src={Tick} alt="tick" srcset="" />
                        <p>Lorem ipsum, dolor sit</p> 
                        </ul>
                </div>
                <button className='learnmore'>Learn More</button>
        </div>
        <div className="package">
            <div className="pricetags">
                <h2 className="title">Plus</h2>
                <h3 className="cost">$250 <span>/month</span> </h3>
                <p className="discription"> Lorem ipsum, dolor sit amet 
                    consectetur adipisicing elit. Suscipit 
                    nemo hic quos, ab, dolor aperiam</p> 
            </div>
            
                < div className="list">
                    <ul className="item">
                        <img src={Tick} alt="tick" srcset="" />
                        <p>Lorem ipsum, dolor sit</p> 
                        </ul>
                          <ul className="item">
                        <img src={Tick} alt="tick" srcset="" />
                        <p>Lorem ipsum, dolor sit</p> 
                        </ul>  <ul className="item">
                        <img src={Tick} alt="tick" srcset="" />
                        <p>Lorem ipsum, dolor sit</p> 
                        </ul>  <ul className="item">
                        <img src={Tick} alt="tick" srcset="" />
                        <p>Lorem ipsum, dolor sit</p> 
                        </ul>  <ul className="item">
                        <img src={Tick} alt="tick" srcset="" />
                        <p>Lorem ipsum, dolor sit</p> 
                        </ul>
                    
                
                </div>
                <button className='learnmore'>Learn More</button>
        </div>
        <div className="package">
            <div className="pricetags">
                <h2 className="title">Pro</h2>
                <h3 className="cost">$400 <span>/month</span> </h3>
                <p className="discription"> Lorem ipsum, dolor sit amet 
                    consectetur adipisicing elit. Suscipit 
                    nemo hic quos, ab, dolor aperiam</p> 
            </div>
            
                <div className="list">
                        <ul className="item">
                        <img src={Tick} alt="tick" srcset="" />
                        <p>Lorem ipsum, dolor sit</p> 
                        </ul>  <ul className="item">
                        <img src={Tick} alt="tick" srcset="" />
                        <p>Lorem ipsum, dolor sit</p> 
                        </ul>  <ul className="item">
                        <img src={Tick} alt="tick" srcset="" />
                        <p>Lorem ipsum, dolor sit</p> 
                        </ul>  <ul className="item">
                        <img src={Tick} alt="tick" srcset="" />
                        <p>Lorem ipsum, dolor sit</p> 
                        </ul>  <ul className="item">
                        <img src={Tick} alt="tick" srcset="" />
                        <p>Lorem ipsum, dolor sit</p> 
                        </ul>
                </div>
                
                <button className='learnmore'>Learn More</button>
        </div>
    </div>
)
}

export default Price
