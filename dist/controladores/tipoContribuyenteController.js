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
exports.eliminarPorId = exports.obtenerPorId = exports.modificar = exports.obtenerTodo = exports.crear = void 0;
const tipoContribuyenteModelo_1 = require("../modelos/tipoContribuyenteModelo");
const crear = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { tipo } = req.body;
        const encontrada = yield tipoContribuyenteModelo_1.TipoContribuyente.findAll({
            where: { tipo },
        });
        if (encontrada.length == 0) {
            var nuevo = yield tipoContribuyenteModelo_1.TipoContribuyente.create(Object.assign({}, req.body));
            return res
                .status(200)
                .json({ message: "TipoContribuyente creada", datos: nuevo });
        }
        else {
            return res
                .status(404)
                .json({ message: "TipoContribuyente ya existe", datos: encontrada });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.crear = crear;
const obtenerTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tipocontribuyente = yield tipoContribuyenteModelo_1.TipoContribuyente.findAll();
        if (tipocontribuyente.length == 0) {
            return res.status(404).json({ message: "no se encontraron tipocontribuyente" });
        }
        else {
            return res
                .status(200)
                .json({ message: "TipoContribuyente obtenidas", datos: tipocontribuyente });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.obtenerTodo = obtenerTodo;
const modificar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const tipocontribuyente = yield tipoContribuyenteModelo_1.TipoContribuyente.findByPk(id);
        //  console.log(tipocontribuyente);
        if (tipocontribuyente == null) {
            return res
                .status(404)
                .json({ message: "TipoContribuyente no encontrado", datos: id });
        }
        else {
            yield tipocontribuyente.update(Object.assign({}, req.body));
            return res.status(200).json({ message: "tipocontribuyente modificada", data: tipocontribuyente });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.modificar = modificar;
const obtenerPorId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tipocontribuyente = yield tipoContribuyenteModelo_1.TipoContribuyente.findByPk(id);
        //  console.log(tipocontribuyente);
        if (tipocontribuyente == null) {
            return res
                .status(404)
                .json({ message: "TipoContribuyente no encontrado", datos: id });
        }
        else {
            return res.status(200).json({ message: "tipocontribuyente obtenido", data: id });
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
        const tipocontribuyente = yield tipoContribuyenteModelo_1.TipoContribuyente.findByPk(id);
        //    console.log(tipocontribuyente);
        if (tipocontribuyente == null) {
            return res
                .status(404)
                .json({ message: "tipocontribuyente encontrado", datos: id });
        }
        else {
            yield tipocontribuyente.destroy();
            res.status(200).json({ message: "TipoContribuyente eliminado", datos: id });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.eliminarPorId = eliminarPorId;
