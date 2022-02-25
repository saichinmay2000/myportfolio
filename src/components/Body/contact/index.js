import React from "react";
import './contact.css'
import Seperator from '../../common/separator'
import SocialConnect from '../../common/social-connect'

function Contact() {
    return(
        <div className="contact">
           <Seperator />
           <label className="section-title">Contact</label>
           <div className="contact-container">
               <div className="contact-left">
                   <p>Want to get in touch? Contact me on any platform</p>
                   <SocialConnect />
               </div>
               <div className="download">
                    <a download href={require('../../../assets/resume.pdf')}>
                        <i class = 'fi-rr-cloud-download download-icon'/>
                        Download Resume
                    </a>
               </div>
           </div>
        </div>
    )
}

export default Contact