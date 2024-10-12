import React from "react";

import star from "../public/images/star.png"


function Card(props)
{ 
    let badgetext
    if(props.openSpots===0)
    {
        badgetext = "Sold Out"
    }
    else
    badgetext = "Online"
    return (
        <>
        <div className="card" >
            {badgetext && <div className="card--badge">{badgetext}</div>}
            <img src={`../public/images/${props.image}`} alt="" className="card--image"/>
            <div className="card--stats" >
                <img src={star} alt="" />
                <span>{props.rating}</span>
                <span className="gray" >{props.reviewcount} .</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p > <span className="bold">from {props.price}$</span>/person</p>
        </div>
        
        </>
    )
}


export default Card