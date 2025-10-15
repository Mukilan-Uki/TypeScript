import { Bank } from "./bank";

export class BOC extends Bank{
    constructor(){
        super();
    }

    public interest():number{
        return this.deposit*0.073;
    }
}