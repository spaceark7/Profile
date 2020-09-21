import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Hero.css'
import pic from '../assets/12.png';

const Hero = () => {
    return ( <div className="container">
        <div className="row">
            <div className="hero-img col-md-4">
                <img src={pic} alt=""/>
            </div>
            <div className="menuBox col-md-8">
                <div className="descriptionBox">
                    <h2>Hello, My Name is <span>Hasbi.</span></h2>
                    <p>I'm a <span>Web</span> Developer & Graphic <span>Design</span></p>
                </div>
                <div className="menu-list">
                    <div className="separator"></div>
                    <ul>
                        <li><span>Home</span></li>
                        <li><span>About</span></li>
                        <li><span>Project</span></li>
                        <li><span>Contact</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div> );
}
 
export default Hero;