import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import signup from '../images/Signup.png'
import investing from '../images/Halal investing.png'
import opportunities from '../images/opportunities.png'
import halalway from '../images/Halal way.png'
import portfolio from '../images/Portfolio.png'
import { Link } from 'react-router-dom';
import '../design.css'


export default function Design() {
    return (
        <div>
            <div className='header'>
                <h2 className='header-title'>ShariaStock</h2>
                <div className='header-button'>
                <Link to="/login">
                        <button className='login'>LOGIN</button>
                    </Link>
                    <Link to="/signup">
                        <button className='signup'>SIGNUP</button>
                    </Link>
                </div>
            </div>
            <br/>

            <div className='carousel-container'>
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={2000}
                >
                    <div>
                        <img src={signup} alt='Slide1' style={{height:"600px",width:"1200px"}}/>
                    </div>

                    <div>
                        <img src={investing} alt='Slide2'  style={{height:"600px",width:"1200px"}}/>
                    </div>

                    <div>
                        <img src={opportunities} alt='Slide3'  style={{height:"600px",width:"1200px"}}/>
                    </div>

                    <div>
                        <img src={halalway} alt='Slide4'  style={{height:"600px",width:"1200px"}}/>
                    </div>

                    <div>
                        <img src={portfolio} alt='Slide5'  style={{height:"600px",width:"1200px"}}/>
                    </div>

                </Carousel>

            </div>

        </div>
    )
}