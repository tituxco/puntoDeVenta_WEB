import { Router } from "express";
import {
  crear,
  eliminarPorId,
  modificar,
  validarUsuario
} from "../controladores/sistemaUsuariosController";

const rutasSistemaUsuarios = Router();
rutasSistemaUsuarios.post("/crear",crear)
rutasSistemaUsuarios.put("/modificar",modificar)
rutasSistemaUsuarios.get("/validarUsuario", validarUsuario);
rutasSistemaUsuarios.delete("/eliminarPorId",eliminarPorId)

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
export default rutasSistemaUsuarios;
