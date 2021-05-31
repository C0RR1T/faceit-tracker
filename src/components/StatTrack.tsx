import UserService from "../api/UserService";
import "../style/Tracker.scss";
import React, {useEffect, useState} from "react";
import Stats from "../models/Stats";

const params = new URLSearchParams(window.location.search);
const background = (params.get('background') || '"https://upload.wikimedia.org/wikipedia/commons/9/95/Black_Colour.svg"').replaceAll('"', "");
const value = ((params.get("circular") === "true") ? '50' : '0');
const userName = params.get('username');

const StatTrack: React.FunctionComponent = () => {
    let [state, setState] = useState<Stats>({
        "Faceit-Api": {
            "name": "",
            "elo": 0,
            "rank": 0,
            "Elo Today": 0,
            "Win Streak": "",
            "Total Matches": "",
            "Matches Won": "",
            "Win": 0,
            "Loss": 0,
            "Last Game": {
                "Map": "",
                "Result": "",
                "Score": "",
                "K/D": "",
                "Elo Diff": 0,
                "Kills": 0,
                "Deaths": 0
            }
        }
    });
    useEffect(() => {
        if (userName)
            new UserService(userName, state, setState)
    }, []);

    let winrate = 0;
    if (state["Faceit-Api"])
        winrate = Math.round((parseInt(state["Faceit-Api"]['Matches Won']) / parseInt(state["Faceit-Api"]["Total Matches"])) * 100) || 0;
    const mapPlayed = state["Faceit-Api"]["Last Game"].Map.charAt(0).toUpperCase() + state["Faceit-Api"]["Last Game"].Map.slice(1);

    if (userName && state["Faceit-Api"]) {
        return (

            <div className="stat-track" style={{
                backgroundImage: `url(${background})`,
                height: '100%',
                width: '100%',
                borderRadius: `${value}%`
            }}>
                <div id="tracker">
                    <h1 id={"name"}>Name: {state["Faceit-Api"].name || ""}</h1>
                    <p id={"rank"}>Faceit rank: {state["Faceit-Api"].rank || ""}</p>
                    <p id={"elo"}>Elo: {state["Faceit-Api"].elo || ""}</p>
                    <p id={"elo-today"}>Elo gained today: {state["Faceit-Api"]["Elo Today"] || 0}</p>
                    <p id={"win-streak"}>Winstreak: {state["Faceit-Api"]["Win Streak"] || ""}</p>
                    <p id={"total-matches"}>Matches played: {state["Faceit-Api"]["Total Matches"] || ""}</p>
                    <p id={"win-rate"}>Winrate: {winrate || ""} %</p>
                    <h2 id={"last-match"}>Last Match</h2>
                    <p id={"map"}>Map played: {mapPlayed || ""}</p>
                    <p id={"result"}>Result: {state["Faceit-Api"]["Last Game"].Result || ""}</p>
                    <p id={"score"}>Score: {state["Faceit-Api"]["Last Game"].Score || ""}</p>
                    <p id={"k-d"}>K/D: {state["Faceit-Api"]["Last Game"]["K/D"]}</p>
                    <p id={"elo-diff"}>Elo difference: {state["Faceit-Api"]["Last Game"]["Elo Diff"] || ""}</p>
                    <p id={"kill"}>Kills: {state["Faceit-Api"]["Last Game"].Kills || ""}</p>
                    <p id={"death"}>Deaths: {state["Faceit-Api"]["Last Game"].Deaths || ""}</p>
                </div>
            </div>

        )
    } else {
        return (
            <div id="error">
                <h1>Hello there</h1>
                <p>Please insert your FACEIT-Username in the Parameters. If you don't know how to do it, take a look
                    at <a href="https://github.com/C0RR1T/faceit-tracker">The Github Repository</a></p>
            </div>
        )
    }
}

export default StatTrack;