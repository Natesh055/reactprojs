import React from "react";
import headericon from "../public/images/earth.jpg"

function Header()
{
    return (
        <>
        <nav className="header-class" >   
            <img src={headericon} alt="" />
            <h2>My Travel Journal</h2>
        </nav>
        </>
    )
}


export default Header