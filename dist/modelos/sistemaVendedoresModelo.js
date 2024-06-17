"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SistemaVendedores = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const saltRounds = 12;
let SistemaVendedores = class SistemaVendedores extends sequelize_typescript_1.Model {
};
exports.SistemaVendedores = SistemaVendedores;
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    })
], SistemaVendedores.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    })
], SistemaVendedores.prototype, "nombre", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    })
], SistemaVendedores.prototype, "apellido", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DOUBLE,
        allowNull: false,
        defaultValue: 0,
    })
], SistemaVendedores.prototype, "comision", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    })
], SistemaVendedores.prototype, "activo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    })
], SistemaVendedores.prototype, "listaPrecios", void 0);
exports.SistemaVendedores = SistemaVendedores = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        createdAt: "f_alta",
        updatedAt: "f_mod",
        tableName: "fact_vendedores",
    })
], SistemaVendedores);
