import { Router } from "express";
import {
  crear,
  eliminarPorId,
  obtenerPorId,
  obtenerTodo,
  modificar,
  incrementarNumeroComprobante,
  obtenerNumeroComprobante
} from "../controladores/confFiscalController";

const tipoContribuyente = Router();
tipoContribuyente.get("/obtenerPorId/:id", obtenerPorId);
tipoContribuyente.get("/obtenerTodo",obtenerTodo)
tipoContribuyente.post("/crear",crear)
tipoContribuyente.delete("/eliminarPorId/:id",eliminarPorId)
tipoContribuyente.put("/modificar", modificar)
tipoContribuyente.put("/incrementarNumeroComprobante",incrementarNumeroComprobante)
tipoContribuyente.get("/obtenerNumeroComprobante",obtenerNumeroComprobante)

export default tipoContribuyente;
