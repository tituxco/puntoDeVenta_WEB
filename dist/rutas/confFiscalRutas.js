"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const confFiscalController_1 = require("../controladores/confFiscalController");
const tipoContribuyente = (0, express_1.Router)();
tipoContribuyente.get("/obtenerPorId/:id", confFiscalController_1.obtenerPorId);
tipoContribuyente.get("/obtenerTodo", confFiscalController_1.obtenerTodo);
tipoContribuyente.post("/crear", confFiscalController_1.crear);
tipoContribuyente.delete("/eliminarPorId/:id", confFiscalController_1.eliminarPorId);
tipoContribuyente.put("/modificar", confFiscalController_1.modificar);
tipoContribuyente.put("/incrementarNumeroComprobante", confFiscalController_1.incrementarNumeroComprobante);
tipoContribuyente.get("/obtenerNumeroComprobante", confFiscalController_1.obtenerNumeroComprobante);
exports.default = tipoContribuyente;