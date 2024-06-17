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
exports.obtenerPorId = exports.obtenerTodo = exports.eliminarPorId = exports.modificar = exports.crear = void 0;
const sistemaVendedoresModelo_1 = require("../modelos/sistemaVendedoresModelo");
const crear = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var nuevo = yield sistemaVendedoresModelo_1.SistemaVendedores.create(Object.assign({}, req.body));
        return res.status(200).json({ message: "vendedor agregado", datos: nuevo });
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.crear = crear;
const modificar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const vendedor = yield sistemaVendedoresModelo_1.SistemaVendedores.findByPk(id);
        if (vendedor == null) {
            return res.status(404).json({ message: "vendedor no encontrado" });
        }
        else {
            yield vendedor.update(Object.assign({}, req.body));
            return res
                .status(200)
                .json({ message: "Vendedor modificado", datos: vendedor });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.modificar = modificar;
const eliminarPorId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const vendedor = yield sistemaVendedoresModelo_1.SistemaVendedores.findByPk(id);
        //  console.log(clientes);
        if (vendedor == null) {
            return res.status(404).json({ message: "vendedor no encontrado" });
        }
        else {
            yield vendedor.destroy();
            return res
                .status(200)
                .json({ message: "vendedor eliminado", data: vendedor });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.eliminarPorId = eliminarPorId;
const obtenerTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const vendedor = yield sistemaVendedoresModelo_1.SistemaVendedores.findAll();
        if (vendedor.length == 0) {
            return res.status(404).json({ message: "no se encontraron vendedores" });
        }
        else {
            return res
                .status(200)
                .json({ message: "vendedores obtenidos", datos: vendedor });
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
        const vendedor = yield sistemaVendedoresModelo_1.SistemaVendedores.findByPk(id);
        //  console.log(clientes);
        if (vendedor == null) {
            return res
                .status(404)
                .json({ message: "vendedor no encontrado", datos: id });
        }
        else {
            return res
                .status(200)
                .json({ message: "vendedor obtenido", data: vendedor });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.obtenerPorId = obtenerPorId;
