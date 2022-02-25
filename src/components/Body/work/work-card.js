import React from "react";
import './workcard.css'

function WorkCard({item}){
    return(
        <div className="work-card">
            <img src={item.companyLogo} className="work-logo" alt="loading" />
            <div className="work-info">
                <label className="work-name">{item.company}</label>
                <div className="work-date">
                    <label>{item.dateJoined}</label>-<label>{item.dateEnd}</label>
                </div>
                <div className="work-desc">
                    <p>{item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default WorkCard