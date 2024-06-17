"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificarToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function verificarToken(token) {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, "secreto");
        return decoded;
    }
    catch (error) {
        throw new Error("Token invalido " + error);
    }
}
exports.verificarToken = verificarToken;
