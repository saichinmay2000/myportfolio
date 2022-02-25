import React from "react";
import Body from "../Body";
import Header from "../Header";
import Footer from "../Footer";
import './home.css'

function Home() {
    return(
        <div className="home">
            <div>
                <Header/>
            </div>
            <div>
                <Body/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home