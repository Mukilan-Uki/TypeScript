export class Bank{
    public deposit:number = 1000;

    public interest():number{
        return this.deposit*0.025;
    }
}

