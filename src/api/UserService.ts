import React, {Dispatch} from "react";
import axios from "./AxiosUtility";
import Player from "../models/Player";

export default class UserService {
    private _username: string;
    private _state: [undefined, Dispatch<any>];
    private _playerID: string = "";

    constructor(username: string, state: [undefined, Dispatch<any>]) {
        this._state = state;
        this._username = username;
        this.getPlayerID();
    }

    private getPlayerID = () => {
        axios.get(`players?nickname=${this._username}&game=csgo`).then(r => {
            let s: Player = r.data;
            this._playerID = s.player_id;
            console.log(this._playerID)
        }).catch(error => {
            let errorString: string;
            switch (error.status) {
                case 400: {
                    errorString = "Error with API"
                    break;
                }
                case 401: {
                    errorString = "API Key is not valid anymore. Please send a Message to C0RR1T_#1855 on Discord";
                    break;
                }
                case 404: {
                    errorString = "Username not found";
                    break;
                }
                case 429: {
                    errorString = "You're sending to many requests. Please try again later";
                    break;
                }
                case 503: {
                    errorString = "Data is currently not available, please try again later";
                    break;
                }
                default: {
                    errorString = "General Error with API, please try again later"
                }
            }
            console.error(errorString);
        })
    }


    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }


    get state(): [undefined, React.Dispatch<any>] {
        return this._state;
    }
}