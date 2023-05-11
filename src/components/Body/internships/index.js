import React from "react";
import './work.css'
import Separator from '../../common/separator/index'
import {WorkData} from '../../data/internships'
import WorkCard from "./work-card";

function Work() {
    const data = WorkData
    return(
        <div className="work">
           <Separator />
           <label className="section-title">Internships</label>
           <div className="work-list">
               {data.map((item) => {
                   return(
                       <WorkCard item={item} />
                   )
               })}
           </div>
        </div>
    )
}

export default Work