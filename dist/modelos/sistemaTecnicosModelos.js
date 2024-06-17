"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SistemaTecnicos = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const saltRounds = 12;
let SistemaTecnicos = class SistemaTecnicos extends sequelize_typescript_1.Model {
};
exports.SistemaTecnicos = SistemaTecnicos;
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    })
], SistemaTecnicos.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    })
], SistemaTecnicos.prototype, "nombre", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    })
], SistemaTecnicos.prototype, "apellido", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    })
], SistemaTecnicos.prototype, "activo", void 0);
exports.SistemaTecnicos = SistemaTecnicos = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        createdAt: "f_alta",
        updatedAt: "f_mod",
        tableName: "tecni_tecnicos",
    })
], SistemaTecnicos);
