import React from "react";
import './work.css'
import Separator from '../../common/separator/index'
import {Work} from '../../data/work'
import WorkCard from "./work-card";

function Working() {
    const data = Work
    return(
        <div className="work">
           <Separator />
           <label className="section-title">Work</label>
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

export default Working