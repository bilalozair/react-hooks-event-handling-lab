// Code Keypad Component Here
import React from "react";

function Keypad (){
    function eventHandler(){
        console.log("Entering password...");
    }
    return (
        <div>
        <input onChange = {eventHandler} type="password" id="keypad" name="keypad"/>
        </div>
    )
}

export default Keypad;