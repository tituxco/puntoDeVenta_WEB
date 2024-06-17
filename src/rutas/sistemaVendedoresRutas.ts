import { Router } from "express";
import {
  crear,
  eliminarPorId,
  modificar,
  obtenerPorId,
  obtenerTodo,
} from "../controladores/sistemaVendedoresController";

const rutasSistemaVendedores = Router();
rutasSistemaVendedores.post("/crear",crear)
rutasSistemaVendedores.put("/modificar",modificar)
rutasSistemaVendedores.get("/obtenerPorId/:id",obtenerPorId)
rutasSistemaVendedores.get("/obtenerTodo",obtenerTodo)
rutasSistemaVendedores.delete("/eliminarPorId/:id",eliminarPorId)

export default rutasSistemaVendedores;
