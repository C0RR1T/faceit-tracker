import Game from "./Game";

export default interface Stats {
    "Faceit-Api": {
        "name": string,
        "elo": number,
        "rank": number,
        "Elo Today": number,
        "Win Streak": string,
        "Total Matches": string,
        "Matches Won": string,
        "Win": number,
        "Loss": number,
        "Last Game": Game
    }
}