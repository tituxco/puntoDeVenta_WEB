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
exports.eliminarPorCodigo = exports.eliminarPorId = exports.obtenerPorCodigo = exports.obtenerPorId = exports.obtenerTodo = exports.crear = void 0;
const asientosModelo_1 = require("../modelos/asientosModelo");
const crear = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var nuevo = yield asientosModelo_1.AsientoContable.create(Object.assign({}, req.body));
        return res
            .status(200)
            .json({ message: "Asiento contable creado", datos: nuevo });
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.crear = crear;
const obtenerTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const asientos = yield asientosModelo_1.AsientoContable.findAll();
        if (asientos.length == 0) {
            return res.status(404).json({ message: "no se encontraron asientos" });
        }
        else {
            return res
                .status(200)
                .json({ message: "Asientos contables obtenidos", datos: asientos });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.obtenerTodo = obtenerTodo;
const obtenerPorId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const asiento = yield asientosModelo_1.AsientoContable.findByPk(id);
        //  console.log(asientoContable);
        if (asiento == null) {
            return res
                .status(404)
                .json({ message: "Asiento no encontrado", datos: id });
        }
        else {
            return res.status(200).json({ message: "Asiento obtenido", data: id });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.obtenerPorId = obtenerPorId;
const obtenerPorCodigo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { codigoAsiento } = req.params;
        //console.log(codigoAsiento);
        const asientos = yield asientosModelo_1.AsientoContable.findAll({
            where: { codigoAsiento },
        });
        if (asientos.length == 0) {
            return res.status(404).json({ message: "asiento no encontrado" });
        }
        else {
            return res
                .status(200)
                .json({ message: "Asiento obtenido", datos: asientos });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.obtenerPorCodigo = obtenerPorCodigo;
const eliminarPorId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const asiento = yield asientosModelo_1.AsientoContable.findByPk(id);
        //    console.log(asientoContable);
        if (asiento == null) {
            return res
                .status(404)
                .json({ message: "Asiento no encontrado", datos: id });
        }
        else {
            yield asiento.destroy();
            res.status(200).json({ message: "Asiento contable eliminado", datos: id });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.eliminarPorId = eliminarPorId;
const eliminarPorCodigo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { codigoAsiento } = req.params;
        const asientos = yield asientosModelo_1.AsientoContable.findAll({
            where: { codigoAsiento },
        });
        // console.log(asientos);
        if (asientos.length == 0) {
            return res.status(404).json({ message: "Asientos no encontrados" });
        }
        else {
            yield asientosModelo_1.AsientoContable.destroy({ where: { codigoAsiento } });
            return res.status(200).json({ message: "Asientos eliminados" });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.eliminarPorCodigo = eliminarPorCodigo;
