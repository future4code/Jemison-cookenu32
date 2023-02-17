"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidPassword = exports.InvalidEmail = exports.InvalidName = exports.CustomError = void 0;
class CustomError extends Error {
    constructor(statusCode, message) {
        super(message);
    }
}
exports.CustomError = CustomError;
class InvalidName extends CustomError {
    constructor() {
        super(400, "Nome inválido");
    }
}
exports.InvalidName = InvalidName;
class InvalidEmail extends CustomError {
    constructor() {
        super(400, "Email inválido");
    }
}
exports.InvalidEmail = InvalidEmail;
class InvalidPassword extends CustomError {
    constructor() {
        super(400, "Senha inválida");
    }
}
exports.InvalidPassword = InvalidPassword;
