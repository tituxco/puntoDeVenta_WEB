import { Router } from "express";
import {
  crear,
  eliminarPorCodigo,
  eliminarPorId,
  obtenerPorCodigo,
  obtenerPorId,
  obtenerTodo,
} from "../controladores/asientosController";

const rutasAsientos = Router();
rutasAsientos.get("/obtenerPorId/:id", obtenerPorId);
rutasAsientos.get("/obtenerPorCodigo/:codigoAsiento",obtenerPorCodigo)
rutasAsientos.get("/obtenerTodo",obtenerTodo)
rutasAsientos.post("/crear",crear)
rutasAsientos.delete("/eliminarPorId/:id",eliminarPorId)
rutasAsientos.delete("/eliminarPorCodigo/:codigoAsiento",eliminarPorCodigo)

export default rutasAsientos;
