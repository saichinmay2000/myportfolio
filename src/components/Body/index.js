import React from "react";
import './body.css'

import About from './about/index.js'
import Projects from './projects/index.js'
import Skills from './skills/index.js'
import Work from './internships/index.js'
import Contact from './contact/index.js'
import Working from "./work copy";

function Body() {
    return(
        <div className="body">

            <section id="about">
                <About />
            </section>

            <section id="projects">
                <Projects />
            </section>

            <section id="skills">
                <Skills />
            </section>

            
            <section id="work">
                <Working />
            </section>

            <section id="work">
                <Work />
            </section>

            <section id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default Body