"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = require("body-parser");
const config_1 = require("./db/config");
const asientosRutas_1 = __importDefault(require("./rutas/asientosRutas"));
const clientesRutas_1 = __importDefault(require("./rutas/clientesRutas"));
const localidadesRutas_1 = __importDefault(require("./rutas/localidadesRutas"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
//rutas de asientos contables
app.use("/asientosContables", asientosRutas_1.default);
//ruta de clientes
app.use("/clientes", clientesRutas_1.default);
//rutas de localidades
app.use("/localidades", localidadesRutas_1.default);
config_1.connection.sync().then(() => {
    console.log("base de datos sincronizada correctamente");
}).catch((err) => {
    console.log("error", err);
});
app.listen(process.env.EXPRESS_PORT);
