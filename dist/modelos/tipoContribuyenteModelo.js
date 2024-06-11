"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoContribuyente = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let TipoContribuyente = class TipoContribuyente extends sequelize_typescript_1.Model {
};
exports.TipoContribuyente = TipoContribuyente;
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    })
], TipoContribuyente.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    })
], TipoContribuyente.prototype, "tipo", void 0);
exports.TipoContribuyente = TipoContribuyente = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: "fact_ivatipo",
    })
], TipoContribuyente);
