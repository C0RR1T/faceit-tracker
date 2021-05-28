import UserService from "../api/UserService";
import "../style/Tracker.scss";
import React, {useEffect, useState} from "react";

let userService: UserService;
const params = new URLSearchParams(window.location.search);
const background = (params.get('background') || '"https://upload.wikimedia.org/wikipedia/commons/9/95/Black_Colour.svg"').replaceAll('"', "");
const value = ((params.get("circular") === "true") ? '50' : '0');
const userName = params.get('username');

const StatTrack: React.FunctionComponent<{}> = () => {
    let componentState = useState();
    let [setState, state] = componentState;
    useEffect(() => {
        if (userName)
            userService = new UserService(userName, componentState)
    }, []);
    if(userName) {
        return (

            <div className="stattrack" style={{
                backgroundImage: `url(${background})`,
                height: '100%',
                width: '100%',
                borderRadius: `${value}%`
            }}>
                <div className="tracker">
                    <h1>Name: C0RR1T</h1>
                    <p>Faceit rank: 10</p>
                    <p>Elo: 1000</p>
                    <p>Elo gained today: +32</p>
                </div>
            </div>

        )
    } else {
        return (
            <div className="error">
                <h1>Hello there</h1>
                <p>Please insert your FACEIT-Username in the Parameters. If you don't know how to do it, take a look
                    at <a href="https://github.com/C0RR1T/faceit-tracker">The Github Repository</a> </p>
            </div>
        )
    }
}

export default StatTrack;