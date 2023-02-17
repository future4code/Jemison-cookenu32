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
exports.UserBusiness = void 0;
const UserData_1 = require("../data/UserData");
const customError_1 = require("../error/customError");
const User_1 = require("../model/User");
const idGenerator_1 = require("../services/idGenerator");
class UserBusiness {
    constructor() {
        this.insertUser = (input) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password } = input;
                if (!name || !email || !password) {
                    throw new customError_1.CustomError(400, "Preencha todos os campos solicitados");
                }
                if (password.length < 6) {
                    throw new customError_1.InvalidPassword();
                }
                if (!email.includes("@")) {
                    throw new customError_1.InvalidEmail();
                }
                const id = new idGenerator_1.IdGenerator().generateId();
                const newUser = new User_1.User(id, name, email, password);
                const userDatabase = new UserData_1.UserDatabase();
                yield userDatabase.insertUser(newUser);
            }
            catch (error) {
                throw new customError_1.CustomError(error.statusCode, error.message);
            }
        });
    }
}
exports.UserBusiness = UserBusiness;
