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
exports.eliminarPorCodigo = exports.eliminarPorId = exports.busquedaFecha = exports.busquedaLocalidad = exports.busquedaGeneral = exports.obtenerPorCodigo = exports.obtenerPorId = exports.obtenerTodo = exports.modificar = exports.crear = void 0;
const clientesModelo_1 = require("../modelos/clientesModelo");
const sequelize_1 = require("sequelize");
const crear = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var nuevo = yield clientesModelo_1.Clientes.create(Object.assign({}, req.body));
        return res.status(200).json({ message: "Cliente agregado", datos: nuevo });
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.crear = crear;
const modificar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idclientes } = req.body;
        const cliente = yield clientesModelo_1.Clientes.findByPk(idclientes);
        if (cliente == null) {
            return res.status(404).json({ message: "cliente no encontrado" });
        }
        else {
            yield cliente.update(Object.assign({}, req.body));
            return res.status(200).json({ message: "Cliente modificado", datos: cliente });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.modificar = modificar;
const obtenerTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clientes = yield clientesModelo_1.Clientes.findAll();
        if (clientes.length == 0) {
            return res.status(404).json({ message: "no se encontraron clientes" });
        }
        else {
            return res
                .status(200)
                .json({ message: "Clientes obtenidos", datos: clientes });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.obtenerTodo = obtenerTodo;
const obtenerPorId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idclientes } = req.params;
        const cliente = yield clientesModelo_1.Clientes.findByPk(idclientes);
        //  console.log(clientes);
        if (cliente == null) {
            return res
                .status(404)
                .json({ message: "Cliente no encontrado", datos: idclientes });
        }
        else {
            return res
                .status(200)
                .json({ message: "Cliente obtenido", data: idclientes });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.obtenerPorId = obtenerPorId;
const obtenerPorCodigo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { codClie } = req.params;
        //console.log(codigoCliente);
        const clientes = yield clientesModelo_1.Clientes.findAll({
            where: { codClie },
        });
        if (clientes.length == 0) {
            return res.status(404).json({ message: "cliente no encontrado" });
        }
        else {
            return res
                .status(200)
                .json({ message: "Cliente obtenido", datos: clientes });
        }
    }
    catch (error) {
        return res
            .status(500)
            .json({ message: "error de servidclientesor", error });
    }
});
exports.obtenerPorCodigo = obtenerPorCodigo;
const busquedaGeneral = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { parametro } = req.params;
        parametro = parametro.replace(" ", "%");
        //console.log(parametro);
        const clientes = yield clientesModelo_1.Clientes.findAll({
            where: {
                [sequelize_1.Op.or]: [
                    { nomapell_razon: { [sequelize_1.Op.like]: `%${parametro}%` } },
                    { dir_domicilio: { [sequelize_1.Op.like]: `%${parametro}%` } },
                    { cuit: { [sequelize_1.Op.like]: `%${parametro}%` } },
                    { telefono: { [sequelize_1.Op.like]: `%${parametro}%` } },
                    { celular: { [sequelize_1.Op.like]: `%${parametro}%` } },
                    { email: { [sequelize_1.Op.like]: `%${parametro}%` } },
                    { codClie: { [sequelize_1.Op.like]: `%${parametro}%` } },
                    { observaciones: { [sequelize_1.Op.like]: `%${parametro}%` } },
                ],
            },
        });
        if (clientes.length == 0) {
            return res.status(404).json({ message: "cliente no encontrado" });
        }
        else {
            return res
                .status(200)
                .json({ message: "Cliente obtenido", datos: clientes });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.busquedaGeneral = busquedaGeneral;
const busquedaLocalidad = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { dir_localidad } = req.params;
        //console.log(parametro);
        const clientes = yield clientesModelo_1.Clientes.findAll({
            where: { dir_localidad },
        });
        if (clientes.length == 0) {
            return res.status(404).json({ message: "cliente no encontrado" });
        }
        else {
            return res
                .status(200)
                .json({ message: "Cliente obtenido", datos: clientes });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.busquedaLocalidad = busquedaLocalidad;
const busquedaFecha = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { desde } = req.body;
        let { hasta } = req.body;
        //console.log(desde,hasta);
        const clientes = yield clientesModelo_1.Clientes.findAll({
            where: { createdAt: { [sequelize_1.Op.between]: [desde, hasta] } },
        });
        if (clientes.length == 0) {
            return res.status(404).json({ message: "cliente no encontrado" });
        }
        else {
            return res
                .status(200)
                .json({ message: "Cliente obtenido", datos: clientes });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", data: error });
    }
});
exports.busquedaFecha = busquedaFecha;
const eliminarPorId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idclientes } = req.params;
        const cliente = yield clientesModelo_1.Clientes.findByPk(idclientes);
        //    console.log(clientes);
        if (cliente == null) {
            return res
                .status(404)
                .json({ message: "Cliente no encontrado", datos: idclientes });
        }
        else {
            yield cliente.destroy();
            res
                .status(200)
                .json({ message: "Cliente eliminado", datos: idclientes });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.eliminarPorId = eliminarPorId;
const eliminarPorCodigo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { codigoCliente } = req.params;
        const clientes = yield clientesModelo_1.Clientes.findAll({
            where: { codigoCliente },
        });
        // console.log(clientes);
        if (clientes.length == 0) {
            return res.status(404).json({ message: "Clientes no encontrados" });
        }
        else {
            yield clientesModelo_1.Clientes.destroy({ where: { codigoCliente } });
            return res.status(200).json({ message: "Clientes eliminados" });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.eliminarPorCodigo = eliminarPorCodigo;
