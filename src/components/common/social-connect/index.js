import React from "react";
import { SocialData } from "../../data/social";
import './social-connect.css'

function SocialConnect() {
    const data = SocialData
    return(
        <div className="connect">
            {data.map((item) => {
                return(
                    <a href={item.link}>
                        <div className="social-icon-div">
                            <img src={item.icon} className="social-icon" alt="icon-loading"/>
                        </div>
                    </a>
                )
            })} 
        </div>
    )
}

export default SocialConnect