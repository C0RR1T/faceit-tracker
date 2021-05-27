import {Dispatch} from "react";

export default class UserService {
    private _username: string;
    private _state: [undefined, Dispatch<any>];

    constructor(username: string, state: [undefined, Dispatch<any>]) {
        this._state = state;
        this._username = username;
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

    set state(value: [undefined, React.Dispatch<any>]) {
        this._state = value;
    }
}