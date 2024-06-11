import { RequestHandler } from "express";
import { TipoContribuyente } from "../modelos/tipoContribuyenteModelo";

export const crear: RequestHandler = async (req, res, next) => {
  try {
    const { tipo } = req.body;
    const encontrada: TipoContribuyente[] = await TipoContribuyente.findAll({
      where: { tipo },
    });
    if (encontrada.length == 0) {
      var nuevo = await TipoContribuyente.create({ ...req.body });
      return res
        .status(200)
        .json({ message: "TipoContribuyente creada", datos: nuevo });
    }else{
      return res
        .status(404)
        .json({ message: "TipoContribuyente ya existe", datos: encontrada });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
export const obtenerTodo: RequestHandler = async (req, res, next) => {
  try {
    const tipocontribuyente: TipoContribuyente[] = await TipoContribuyente.findAll();
    if (tipocontribuyente.length == 0) {
      return res.status(404).json({ message: "no se encontraron tipocontribuyente" });
    } else {
      return res
        .status(200)
        .json({ message: "TipoContribuyente obtenidas", datos: tipocontribuyente });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
export const modificar:RequestHandler=async(req,res,next)=>{
  try {
    const { id } = req.body;
    const tipocontribuyente: TipoContribuyente | null = await TipoContribuyente.findByPk(id);
    //  console.log(tipocontribuyente);
    if (tipocontribuyente == null) {
      return res
        .status(404)
        .json({ message: "TipoContribuyente no encontrado", datos: id });
    } else {
      await tipocontribuyente.update({...req.body})
      return res.status(200).json({ message: "tipocontribuyente modificada", data: tipocontribuyente });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
}
export const obtenerPorId: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tipocontribuyente: TipoContribuyente | null = await TipoContribuyente.findByPk(id);
    //  console.log(tipocontribuyente);
    if (tipocontribuyente == null) {
      return res
        .status(404)
        .json({ message: "TipoContribuyente no encontrado", datos: id });
    } else {
      return res.status(200).json({ message: "tipocontribuyente obtenido", data: id });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
export const eliminarPorId: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tipocontribuyente: TipoContribuyente | null = await TipoContribuyente.findByPk(id);
    //    console.log(tipocontribuyente);
    if (tipocontribuyente == null) {
      return res
        .status(404)
        .json({ message: "tipocontribuyente encontrado", datos: id });
    } else {
      await tipocontribuyente.destroy();
      res.status(200).json({ message: "TipoContribuyente eliminado", datos: id });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
