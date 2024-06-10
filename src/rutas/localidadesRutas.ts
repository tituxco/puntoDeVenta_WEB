import { Router } from "express";
import {
  crear,
  eliminarPorId,
  obtenerPorId,
  obtenerTodo,
  modificar
} from "../controladores/localidadesController";

const rutasLocalidades = Router();
rutasLocalidades.get("/obtenerPorId/:id", obtenerPorId);
rutasLocalidades.get("/obtenerTodo",obtenerTodo)
rutasLocalidades.post("/crear",crear)
rutasLocalidades.delete("/eliminarPorId/:id",eliminarPorId)
rutasLocalidades.put("/modificar", modificar)

export default rutasLocalidades;
