import React from "react";

import "./card.css"


function Card(props)
{
    return (
        <>  

<div className="location-card">
                <div className="image-container">
                    <img src={`../public/images/${props.image}`} alt="Location" />
                </div>
                <div className="details-container">
                    <div className="location-info">
                        <img src="../public/images/location.png" alt="Location icon" />
                        <span className="location-text">{props.location}</span>
                        <span>
                            <a href={props.maplink} target="_blank" rel="noopener noreferrer">
                                View on Google Maps
                            </a>
                        </span>
                    </div>
                    <h2 className="location-title">{props.location}</h2>
                    <p className="date-range">
                        {props.startdate} - {props.enddate}
                    </p>
                    <p className="description-text">{props.description}</p>
                </div>
            </div>

        
        </>
    )
}
export default Card