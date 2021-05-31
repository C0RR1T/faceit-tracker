import {Dispatch} from "react";
import axios from "./AxiosUtility";
import Stats from "../models/Stats";

export default class UserService {
    private _username: string;
    private _state: Stats;
    private _setState: Dispatch<Stats>

    constructor(username: string, state: Stats, setState: Dispatch<Stats>) {
        this._state = state;
        this._setState = setState;
        this._username = username;
        this.getStats();
        this.getStatsInterval();
    }

    private getStatsInterval = () => {
        setInterval(() => {
            this.getStats();
        }, 600000);
    }

    private getStats = () => {
        console.trace('Getting stats..');
        axios.get<Stats>(`${this._username}/d`).then(r => {
            this._setState(r.data);
        }).catch(e => this.errorHandling(e));
    }


    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    private errorHandling = (error: any) => {
        if(error.response) {

            let errorString: string;
            switch (error.response.status) {
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
        }
    }
}