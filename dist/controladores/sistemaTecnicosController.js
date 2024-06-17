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
const sistemaTecnicosModelos_1 = require("../modelos/sistemaTecnicosModelos");
const crear = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var nuevo = yield sistemaTecnicosModelos_1.SistemaTecnicos.create(Object.assign({}, req.body));
        return res.status(200).json({ message: "tecnico agregado", datos: nuevo });
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.crear = crear;
const modificar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const tecnico = yield sistemaTecnicosModelos_1.SistemaTecnicos.findByPk(id);
        if (tecnico == null) {
            return res.status(404).json({ message: "tecnico no encontrado" });
        }
        else {
            yield tecnico.update(Object.assign({}, req.body));
            return res
                .status(200)
                .json({ message: "Tecnico modificado", datos: tecnico });
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
        const tecnico = yield sistemaTecnicosModelos_1.SistemaTecnicos.findByPk(id);
        //  console.log(clientes);
        if (tecnico == null) {
            return res.status(404).json({ message: "tecnico no encontrado" });
        }
        else {
            yield tecnico.destroy();
            return res
                .status(200)
                .json({ message: "tecnico eliminado", data: tecnico });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.eliminarPorId = eliminarPorId;
const obtenerTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tecnico = yield sistemaTecnicosModelos_1.SistemaTecnicos.findAll();
        if (tecnico.length == 0) {
            return res.status(404).json({ message: "no se encontraron tecnicoes" });
        }
        else {
            return res
                .status(200)
                .json({ message: "tecnicoes obtenidos", datos: tecnico });
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
        const tecnico = yield sistemaTecnicosModelos_1.SistemaTecnicos.findByPk(id);
        //  console.log(clientes);
        if (tecnico == null) {
            return res
                .status(404)
                .json({ message: "tecnico no encontrado", datos: id });
        }
        else {
            return res
                .status(200)
                .json({ message: "tecnico obtenido", data: tecnico });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.obtenerPorId = obtenerPorId;
