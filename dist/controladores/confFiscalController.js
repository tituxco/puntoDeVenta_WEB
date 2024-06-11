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
exports.eliminarPorId = exports.obtenerPorId = exports.obtenerTodo = exports.obtenerNumeroComprobante = exports.incrementarNumeroComprobante = exports.modificar = exports.crear = void 0;
const confFiscalModelo_1 = require("../modelos/confFiscalModelo");
const sequelize_1 = require("sequelize");
const crear = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var nuevo = yield confFiscalModelo_1.ConfFiscal.create(Object.assign({}, req.body));
        return res
            .status(200)
            .json({ message: "ConfFiscal agregado", datos: nuevo });
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.crear = crear;
const modificar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const conffiscal = yield confFiscalModelo_1.ConfFiscal.findByPk(id);
        if (conffiscal == null) {
            return res.status(404).json({ message: "conffiscal no encontrado" });
        }
        else {
            yield conffiscal.update(Object.assign({}, req.body));
            return res
                .status(200)
                .json({ message: "ConfFiscal modificado", datos: conffiscal });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.modificar = modificar;
const incrementarNumeroComprobante = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { tipoComprobante } = req.body;
        const { ptovta } = req.body;
        const conffiscal = yield confFiscalModelo_1.ConfFiscal.findOne({
            where: { [sequelize_1.Op.and]: [{ tipoComprobante }, { ptovta }] },
        });
        if (conffiscal == null) {
            return res.status(404).json({ message: "conffiscal no encontrado" });
        }
        else {
            let confnume = conffiscal.confnume;
            confnume++;
            yield conffiscal.update({ confnume });
            return res
                .status(200)
                .json({ message: "Numero de comprobante actualizado", datos: conffiscal });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.incrementarNumeroComprobante = incrementarNumeroComprobante;
const obtenerNumeroComprobante = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { tipoComprobante } = req.body;
        const { ptovta } = req.body;
        const conffiscal = yield confFiscalModelo_1.ConfFiscal.findOne({
            where: { [sequelize_1.Op.and]: [{ tipoComprobante }, { ptovta }] },
        });
        if (conffiscal == null) {
            return res.status(404).json({ message: "conffiscal no encontrado" });
        }
        else {
            return res
                .status(200)
                .json({ message: "tipo de comprobante obtenido", datos: conffiscal });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.obtenerNumeroComprobante = obtenerNumeroComprobante;
const obtenerTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conffiscal = yield confFiscalModelo_1.ConfFiscal.findAll();
        if (conffiscal.length == 0) {
            return res.status(404).json({ message: "no se encontraron conffiscal" });
        }
        else {
            return res
                .status(200)
                .json({ message: "ConfFiscal obtenidos", datos: conffiscal });
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
        const conffiscal = yield confFiscalModelo_1.ConfFiscal.findByPk(id);
        //  console.log(conffiscal);
        if (conffiscal == null) {
            return res
                .status(404)
                .json({ message: "ConfFiscal no encontrado", datos: id });
        }
        else {
            return res.status(200).json({ message: "ConfFiscal obtenido", data: id });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.obtenerPorId = obtenerPorId;
const eliminarPorId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const conffiscal = yield confFiscalModelo_1.ConfFiscal.findByPk(id);
        //    console.log(conffiscal);
        if (conffiscal == null) {
            return res
                .status(404)
                .json({ message: "ConfFiscal no encontrado", datos: id });
        }
        else {
            yield conffiscal.destroy();
            res.status(200).json({ message: "ConfFiscal eliminado", datos: id });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.eliminarPorId = eliminarPorId;
