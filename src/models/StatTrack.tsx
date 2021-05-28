import UserService from "../api/UserService";
import "../style/Tracker.scss";
import React, {useState} from "react";

export default () => {
    let componentState = useState();
    const params = new URLSearchParams(window.location.search);
    let [setState, state] = componentState;
    new UserService("", componentState);
    const background = (params.get('background') || '\"https://upload.wikimedia.org/wikipedia/commons/9/95/Black_Colour.svg\"').replaceAll('\"', "");
    console.log(background)
    console.log(((params.get("circular" ) === "true") ? '50' : '0'));
    return (
        <div className="stattrack" style={{
            backgroundImage: `url(${background})`,
            height: '100%',
            width:'100%',
            borderRadius: `${((params.get("circular" ) === "true") ? '50' : '0')}%`
        }}>
            <div className="tracker" >
                <h1>Name: C0RR1T</h1>
                <p>Faceit rank: 10</p>
                <p>Elo: 1000</p>
                <p>Elo gained today: +32</p>
            </div>
        </div>
    )
}