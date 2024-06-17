"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sistemaUsuariosController_1 = require("../controladores/sistemaUsuariosController");
const rutasSistemaUsuarios = (0, express_1.Router)();
rutasSistemaUsuarios.post("/crear", sistemaUsuariosController_1.crear);
rutasSistemaUsuarios.put("/modificar", sistemaUsuariosController_1.modificar);
rutasSistemaUsuarios.get("/validarUsuario", sistemaUsuariosController_1.validarUsuario);
rutasSistemaUsuarios.delete("/eliminarPorId", sistemaUsuariosController_1.eliminarPorId);
/*
rutasClientes.get("/obtenerPorId/:idclientes", obtenerPorId);
rutasClientes.get("/obtenerPorCodigo/:codClie",obtenerPorCodigo)
rutasClientes.get("/obtenerTodo",obtenerTodo)
rutasClientes.get("/busqueda/:parametro",busquedaGeneral)
rutasClientes.get("/busquedaLocalidad/:dir_localidad",busquedaLocalidad)
rutasClientes.get("/busquedaFecha",busquedaFecha)


rutasClientes.delete("/eliminarPorId/:idclientes",eliminarPorId)
rutasClientes.delete("/eliminarPorCodigo/:codClie",eliminarPorCodigo)
*/
exports.default = rutasSistemaUsuarios;
