import React from "react";
import SocialConnect from "../../common/social-connect/index";
import './about.css'

function About() {
    return(
        <div className="about">
            <div className="about-top">

                <div className="about-info">
                    Hello There 👋, I am <br/> 
                    <span className="info-name">Sai Chinmay Tripurari</span>.
                    <br/>I love experimenting Web and Mobile Applications.
                </div>


                <div className="about-photo">
                    <img src={require('../../../assets/coding.png')} className="about-pic" alt="loading"></img>
                </div>

            </div>
            <SocialConnect />
        </div>
    )
}

export default About