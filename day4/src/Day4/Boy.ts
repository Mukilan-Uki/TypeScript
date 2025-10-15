import { Human } from "./Human";

export class Boy extends Human{
    constructor(){
        super();
    }

    public eat():void{
        console.log("Boy is eating")
    }
}