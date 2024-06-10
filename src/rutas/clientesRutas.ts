import { Router } from "express";
import {
  crear,
  eliminarPorCodigo,
  eliminarPorId,
  obtenerPorCodigo,
  obtenerPorId,
  obtenerTodo,
  busquedaGeneral,
  busquedaLocalidad,
  busquedaFecha,
  modificar
} from "../controladores/clientesController";

const rutasClientes = Router();
rutasClientes.get("/obtenerPorId/:idclientes", obtenerPorId);
rutasClientes.get("/obtenerPorCodigo/:codClie",obtenerPorCodigo)
rutasClientes.get("/obtenerTodo",obtenerTodo)
rutasClientes.get("/busqueda/:parametro",busquedaGeneral)
rutasClientes.get("/busquedaLocalidad/:dir_localidad",busquedaLocalidad)
rutasClientes.get("/busquedaFecha",busquedaFecha)
rutasClientes.post("/crear",crear)
rutasClientes.put("/modificar",modificar)
rutasClientes.delete("/eliminarPorId/:idclientes",eliminarPorId)
rutasClientes.delete("/eliminarPorCodigo/:codClie",eliminarPorCodigo)

export default rutasClientes;
