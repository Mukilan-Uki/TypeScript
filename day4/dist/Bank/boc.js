"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOC = void 0;
const bank_1 = require("./bank");
class BOC extends bank_1.Bank {
    constructor() {
        super();
    }
    interest() {
        return this.deposit * 0.073;
    }
}
exports.BOC = BOC;
//# sourceMappingURL=boc.js.map