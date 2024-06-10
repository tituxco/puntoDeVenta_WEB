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
exports.ObtenerTodo = exports.createToDo = void 0;
const todos_1 = require("../modelos/todos");
const createToDo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var todos = yield todos_1.Todos.create(Object.assign({}, req.body));
        return res.status(200).json({ message: "registro creado", data: todos });
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.createToDo = createToDo;
const ObtenerTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todosRegistros = yield todos_1.Todos.findAll();
        return res.status(200).json({ message: "Datos obtenidos", data: todosRegistros });
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.ObtenerTodo = ObtenerTodo;
