import React, { useState } from "react";
import './AppContact.css'

export default function Email() {
  return (<div className="flexColumn alignCenter emailBG m emailSize">
    <input className="m input" placeholder="Name"/>
    <input className="m input" placeholder="Email"/>
    <input className="m input message" placeholder="Message"/>
    <button className="m submit" >Submit</button>
  </div>
    )
}
