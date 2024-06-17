"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
//import { Todos } from "../modelos/todos";
const dotenv_1 = __importDefault(require("dotenv"));
const asientosModelo_1 = require("../modelos/asientosModelo");
const clientesModelo_1 = require("../modelos/clientesModelo");
const localidadesModelo_1 = require("../modelos/localidadesModelo");
const confFiscalModelo_1 = require("../modelos/confFiscalModelo");
const tipoContribuyenteModelo_1 = require("../modelos/tipoContribuyenteModelo");
const sistemaUsuariosModelo_1 = require("../modelos/sistemaUsuariosModelo");
const sistemaVendedoresModelo_1 = require("../modelos/sistemaVendedoresModelo");
const sistemaTecnicosModelos_1 = require("../modelos/sistemaTecnicosModelos");
dotenv_1.default.config();
exports.connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
    logging: false,
    models: [
        asientosModelo_1.AsientoContable,
        clientesModelo_1.Clientes,
        localidadesModelo_1.Localidades,
        confFiscalModelo_1.ConfFiscal,
        tipoContribuyenteModelo_1.TipoContribuyente,
        sistemaUsuariosModelo_1.SistemaUsuarios,
        sistemaVendedoresModelo_1.SistemaVendedores,
        sistemaTecnicosModelos_1.SistemaTecnicos
    ],
});
