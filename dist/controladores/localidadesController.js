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
const localidadesModelo_1 = require("../modelos/localidadesModelo");
const crear = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre } = req.body;
        const encontrada = yield localidadesModelo_1.Localidades.findAll({
            where: { nombre },
        });
        if (encontrada.length == 0) {
            var nuevo = yield localidadesModelo_1.Localidades.create(Object.assign({}, req.body));
            return res
                .status(200)
                .json({ message: "Localidad creada", datos: nuevo });
        }
        else {
            return res
                .status(404)
                .json({ message: "Localidad ya existe", datos: encontrada });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.crear = crear;
const obtenerTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const localidad = yield localidadesModelo_1.Localidades.findAll();
        if (localidad.length == 0) {
            return res.status(404).json({ message: "no se encontraron localidades" });
        }
        else {
            return res
                .status(200)
                .json({ message: "Localidades obtenidas", datos: localidad });
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
        const localidad = yield localidadesModelo_1.Localidades.findByPk(id);
        //  console.log(localidades);
        if (localidad == null) {
            return res
                .status(404)
                .json({ message: "Localidad no encontrado", datos: id });
        }
        else {
            yield localidad.update(Object.assign({}, req.body));
            return res.status(200).json({ message: "localidad modificada", data: localidad });
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
        const localidad = yield localidadesModelo_1.Localidades.findByPk(id);
        //  console.log(localidades);
        if (localidad == null) {
            return res
                .status(404)
                .json({ message: "Localidad no encontrado", datos: id });
        }
        else {
            return res.status(200).json({ message: "localidad obtenido", data: id });
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
        const localidad = yield localidadesModelo_1.Localidades.findByPk(id);
        //    console.log(localidades);
        if (localidad == null) {
            return res
                .status(404)
                .json({ message: "localidad encontrado", datos: id });
        }
        else {
            yield localidad.destroy();
            res.status(200).json({ message: "Localidad eliminado", datos: id });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.eliminarPorId = eliminarPorId;
