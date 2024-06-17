"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SistemaUsuarios = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const bcrypt_1 = __importDefault(require("bcrypt"));
const validadores_1 = require("../utilidades/validadores");
const saltRounds = 12;
let SistemaUsuarios = class SistemaUsuarios extends sequelize_typescript_1.Model {
    ///encriptamos la contraseña antes de crearla y antes de actualizarla
    static hashPasswordBeforeCreate(user) {
        if (user.contrasena) {
            var salt = bcrypt_1.default.genSaltSync(saltRounds);
            user.contrasena = bcrypt_1.default.hashSync(user.contrasena, salt);
        }
    }
    static hashPasswordBeforeUpdate(user) {
        if (user.contrasena) {
            var salt = bcrypt_1.default.genSaltSync(saltRounds);
            user.contrasena = bcrypt_1.default.hashSync(user.contrasena, salt);
        }
    }
};
exports.SistemaUsuarios = SistemaUsuarios;
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    })
], SistemaUsuarios.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    })
], SistemaUsuarios.prototype, "nombre", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    })
], SistemaUsuarios.prototype, "apellido", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        defaultValue: 0,
    })
], SistemaUsuarios.prototype, "usuario", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        validate: {
            validator: function (value) {
                return (0, validadores_1.estructuraContrasena)(value);
            },
        },
    })
], SistemaUsuarios.prototype, "contrasena", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    })
], SistemaUsuarios.prototype, "privilegios", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    })
], SistemaUsuarios.prototype, "idAlmacen", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    })
], SistemaUsuarios.prototype, "activo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    })
], SistemaUsuarios.prototype, "idvendedor", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    })
], SistemaUsuarios.prototype, "idtecnico", void 0);
__decorate([
    sequelize_typescript_1.BeforeCreate
], SistemaUsuarios, "hashPasswordBeforeCreate", null);
__decorate([
    sequelize_typescript_1.BeforeUpdate
], SistemaUsuarios, "hashPasswordBeforeUpdate", null);
exports.SistemaUsuarios = SistemaUsuarios = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        createdAt: "f_alta",
        updatedAt: "f_mod",
        tableName: "cm_usuarios",
    })
], SistemaUsuarios);
