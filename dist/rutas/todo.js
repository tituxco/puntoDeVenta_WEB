"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = require("../controladores/todo");
const rutasTodo = (0, express_1.Router)();
rutasTodo.get("/obtenerTodo", todo_1.ObtenerTodo);
exports.default = rutasTodo;
