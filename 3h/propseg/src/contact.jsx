import React from "react";
import REACTDOM from "react-dom";

import './contact.css'
// import catimg from '../public/cat.jpg'

import phoneimg from '../public/call.png'

import mailimg from '../public/mail.png'


function Contact(props) {
    console.log(props)
  return (
    <>
      <div className="contacts">
        <div className="contact-card">
        <img src={props.image} alt="" width="250" height="200" />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phoneimg} alt=""width="20" height="20" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={mailimg} alt="" width="20" height="20"/>
                <p>{props.email}</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Contact