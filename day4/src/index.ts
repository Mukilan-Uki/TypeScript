import { Boy } from "./Day4/Boy";

function functionForPolymorphism(){
    const obj = new Boy();
    obj.eat();
}
functionForPolymorphism();

import { Bank } from "./Bank/bank";
import { BOC } from "./Bank/boc";
import { Peoples } from "./Bank/peoplesbank";
import { HNB } from "./Bank/hnb";
function functionForBanking(){
    const bankObj = new Bank();
    const bocObj = new BOC();
    const hnbObj = new HNB();
    const peoplesObj = new Peoples();

    console.log("How much if I deposit "+bankObj.deposit+"LKR in each bank?")
    console.log("I'll get "+bankObj.interest()+" in general.");
    console.log("I'll get "+bocObj.interest()+" in BOC.");
    console.log("I'll get "+hnbObj.interest()+" in HNB.");
    console.log("I'll get "+peoplesObj.interest()+" in People's Bank.");
}
functionForBanking();