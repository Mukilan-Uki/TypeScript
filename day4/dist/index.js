"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Boy_1 = require("./Day4/Boy");
function functionForPolymorphism() {
    const obj = new Boy_1.Boy();
    obj.eat();
}
functionForPolymorphism();
const bank_1 = require("./Bank/bank");
const boc_1 = require("./Bank/boc");
const peoplesbank_1 = require("./Bank/peoplesbank");
const hnb_1 = require("./Bank/hnb");
function functionForBanking() {
    const bankObj = new bank_1.Bank();
    const bocObj = new boc_1.BOC();
    const hnbObj = new hnb_1.HNB();
    const peoplesObj = new peoplesbank_1.Peoples();
    console.log("How much if I deposit " + bankObj.deposit + "LKR in each bank?");
    console.log("I'll get " + bankObj.interest() + " in general.");
    console.log("I'll get " + bocObj.interest() + " in BOC.");
    console.log("I'll get " + hnbObj.interest() + " in HNB.");
    console.log("I'll get " + peoplesObj.interest() + " in People's Bank.");
}
functionForBanking();
//# sourceMappingURL=index.js.map