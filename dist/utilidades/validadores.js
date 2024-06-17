"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estructuraContrasena = void 0;
const estructuraContrasena = (value) => {
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}/;
    return regex.test(value);
};
exports.estructuraContrasena = estructuraContrasena;
