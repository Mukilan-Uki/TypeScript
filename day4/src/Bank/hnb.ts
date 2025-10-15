import { Bank } from "./bank";

export class HNB extends Bank{
    constructor(){
        super();
    }

    public interest():number{
        return this.deposit*0.082;
    }
}