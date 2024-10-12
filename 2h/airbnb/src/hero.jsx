import React from "react";

import grid from "../public/images/photo-grid.png"


function Hero()
{
    return (
        <>
        
        <section className="hero" >
            <img src={grid} alt="" className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join Unique interactive activites led by one kind</p>
        </section>
        </>
    )
}

export default Hero