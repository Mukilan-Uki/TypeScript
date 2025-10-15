import { Bank } from "./bank";

export class Peoples extends Bank{
    constructor(){
        super();
    }

    public interest():number{
        return this.deposit*0.079;
    }
}