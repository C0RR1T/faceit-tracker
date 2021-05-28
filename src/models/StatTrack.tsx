import UserService from "../api/UserService";
import "../style/Tracker.scss";
import React, {useState} from "react";
import {useLocation} from "react-router";

export default () => {
    let componentState = useState();
    const params = new URLSearchParams(useLocation().search);
    let [setState, state] = componentState;
    new UserService("", componentState);
    const background = params.get('background') || '\"https://upload.wikimedia.org/wikipedia/commons/9/95/Black_Colour.svg\"'
    return (
        <>
            <div className="tracker">
                <h1>Name: C0RR1T</h1>
                <p>Faceit rank: 10</p>
                <p>Elo: 1000</p>
                <p>Elo gained today: +32</p>
            </div>
            <img src={background.replaceAll('\"', "")} className="background-image" alt="Background image"/>
        </>
    )
}