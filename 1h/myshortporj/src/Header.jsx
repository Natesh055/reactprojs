import React from "react";
import ReactDOM from "react-dom"

import vite from '../public/vite.svg'

function Header(){
    return (
        <div className="header">
            <div className="" >
                <img src={vite} alt="" />
            </div>
            <div className="">
                <h2>React-Course Project1</h2>
            </div>
        </div>
            
    )
}
export default Header