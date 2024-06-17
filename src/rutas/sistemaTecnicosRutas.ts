import { Router } from "express";
import {
  crear,
  eliminarPorId,
  modificar,
  obtenerPorId,
  obtenerTodo,
} from "../controladores/sistemaTecnicosController";

const rutasSistemaTecnicos = Router();
rutasSistemaTecnicos.post("/crear",crear)
rutasSistemaTecnicos.put("/modificar",modificar)
rutasSistemaTecnicos.get("/obtenerPorId/:id",obtenerPorId)
rutasSistemaTecnicos.get("/obtenerTodo",obtenerTodo)
rutasSistemaTecnicos.delete("/eliminarPorId/:id",eliminarPorId)

export default rutasSistemaTecnicos;
