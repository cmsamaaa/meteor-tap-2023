"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertSeed = void 0;
const db_seed_1 = require("../constants/db.seed");
const Household = require('../models/household.schema');
/**
 * If the environment is not test, then find all households,
 * if there are none, then insert the household_list.
 */
function insertSeed() {
    return __awaiter(this, void 0, void 0, function* () {
        if (process.env.NODE_ENV !== 'test') {
            const result = yield Household.find();
            if (result.length === 0)
                yield Household.insertMany(db_seed_1.household_list);
        }
    });
}
exports.insertSeed = insertSeed;
