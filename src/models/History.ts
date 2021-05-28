import Game from "./Game";

export default interface History {
    'items': Game[],
    'start': number,
    'end': number,
    'from': number,
    'to': number
}