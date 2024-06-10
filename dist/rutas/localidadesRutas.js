"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const localidadesController_1 = require("../controladores/localidadesController");
const rutasLocalidades = (0, express_1.Router)();
rutasLocalidades.get("/obtenerPorId/:id", localidadesController_1.obtenerPorId);
rutasLocalidades.get("/obtenerTodo", localidadesController_1.obtenerTodo);
rutasLocalidades.post("/crear", localidadesController_1.crear);
rutasLocalidades.delete("/eliminarPorId/:id", localidadesController_1.eliminarPorId);
rutasLocalidades.put("/modificar", localidadesController_1.modificar);
exports.default = rutasLocalidades;