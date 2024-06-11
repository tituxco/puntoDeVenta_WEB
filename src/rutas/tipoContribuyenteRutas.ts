import { Router } from "express";
import {
  crear,
  eliminarPorId,
  obtenerPorId,
  obtenerTodo,
  modificar
} from "../controladores/tipoContribuyenteController";

const rutasTipoContribuyente = Router();
rutasTipoContribuyente.get("/obtenerPorId/:id", obtenerPorId);
rutasTipoContribuyente.get("/obtenerTodo",obtenerTodo)
rutasTipoContribuyente.post("/crear",crear)
rutasTipoContribuyente.delete("/eliminarPorId/:id",eliminarPorId)
rutasTipoContribuyente.put("/modificar", modificar)

export default rutasTipoContribuyente;
