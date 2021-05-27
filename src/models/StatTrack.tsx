import UserService from "../api/UserService";
import "../style/Tracker.scss";
import {URLSearchParams} from "url";
import React, {useState} from "react";

export default () => {
    let componentState = useState();
    const params = new URLSearchParams(window.location.search);
    let [setState, state] = componentState;
    new UserService("", componentState);
    const background = params.get('background') || 'https://upload.wikimedia.org/wikipedia/commons/9/95/Black_Colour.svg'
    return (
        <>
            <div className="tracker">
                <h1>Hallo</h1>
            </div>
            <img src={background} className="background-image" alt="Background image"/>
        </>
    )
}