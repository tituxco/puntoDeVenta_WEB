import { RequestHandler } from "express";
import { ConfFiscal } from "../modelos/confFiscalModelo";
import { Op } from "sequelize";

export const crear: RequestHandler = async (req, res, next) => {
  try {
    var nuevo = await ConfFiscal.create({ ...req.body });
    return res
      .status(200)
      .json({ message: "ConfFiscal agregado", datos: nuevo });
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
export const modificar: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.body;
    const conffiscal: ConfFiscal | null = await ConfFiscal.findByPk(id);
    if (conffiscal == null) {
      return res.status(404).json({ message: "conffiscal no encontrado" });
    } else {
      await conffiscal.update({ ...req.body });
      return res
        .status(200)
        .json({ message: "ConfFiscal modificado", datos: conffiscal });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};

export const incrementarNumeroComprobante: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { tipoComprobante } = req.body;
    const { ptovta } = req.body;

    const conffiscal: ConfFiscal | null = await ConfFiscal.findOne({
      where: { [Op.and]: [{ tipoComprobante }, { ptovta }] },
    });
    if (conffiscal == null) {
      return res.status(404).json({ message: "conffiscal no encontrado" });
    } else {
      let confnume=conffiscal.confnume
      confnume++
      await conffiscal.update({confnume});
      return res
        .status(200)
        .json({ message: "Numero de comprobante actualizado", datos: conffiscal });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
export const obtenerNumeroComprobante: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { tipoComprobante } = req.body;
    const { ptovta } = req.body;

    const conffiscal: ConfFiscal | null = await ConfFiscal.findOne({
      where: { [Op.and]: [{ tipoComprobante }, { ptovta }] },
    });
    if (conffiscal == null) {
      return res.status(404).json({ message: "conffiscal no encontrado" });
    } else {      
      return res
        .status(200)
        .json({ message: "tipo de comprobante obtenido", datos: conffiscal });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
export const obtenerTodo: RequestHandler = async (req, res, next) => {
  try {
    const conffiscal: ConfFiscal[] = await ConfFiscal.findAll();
    if (conffiscal.length == 0) {
      return res.status(404).json({ message: "no se encontraron conffiscal" });
    } else {
      return res
        .status(200)
        .json({ message: "ConfFiscal obtenidos", datos: conffiscal });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
export const obtenerPorId: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const conffiscal: ConfFiscal | null = await ConfFiscal.findByPk(id);
    //  console.log(conffiscal);
    if (conffiscal == null) {
      return res
        .status(404)
        .json({ message: "ConfFiscal no encontrado", datos: id });
    } else {
      return res.status(200).json({ message: "ConfFiscal obtenido", data: id });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
export const eliminarPorId: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const conffiscal: ConfFiscal | null = await ConfFiscal.findByPk(id);
    //    console.log(conffiscal);
    if (conffiscal == null) {
      return res
        .status(404)
        .json({ message: "ConfFiscal no encontrado", datos: id });
    } else {
      await conffiscal.destroy();
      res.status(200).json({ message: "ConfFiscal eliminado", datos: id });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
