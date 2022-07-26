import {babyName} from "../ContainerForButtons"

export function comparing (a : babyName, b: babyName) : number{
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    }
