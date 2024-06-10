import { RequestHandler } from "express";
import { AsientoContable } from "../modelos/asientosModelo";

export const crear: RequestHandler = async (req, res, next) => {
  try {
    var nuevo = await AsientoContable.create({ ...req.body });
    return res
      .status(200)
      .json({ message: "Asiento contable creado", datos: nuevo });
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
export const obtenerTodo: RequestHandler = async (req, res, next) => {
  try {
    const asientos: AsientoContable[] = await AsientoContable.findAll();
    if (asientos.length == 0) {
      return res.status(404).json({ message: "no se encontraron asientos" });
    } else {
      return res
        .status(200)
        .json({ message: "Asientos contables obtenidos", datos: asientos });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
export const obtenerPorId: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const asiento: AsientoContable | null = await AsientoContable.findByPk(id);
    //  console.log(asientoContable);
    if (asiento == null) {
      return res
        .status(404)
        .json({ message: "Asiento no encontrado", datos: id });
    } else {
      return res.status(200).json({ message: "Asiento obtenido", data: id });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
export const obtenerPorCodigo: RequestHandler = async (req, res, next) => {
  try {
    const { codigoAsiento } = req.params;
    //console.log(codigoAsiento);
    const asientos: AsientoContable[] = await AsientoContable.findAll({
      where: { codigoAsiento },
    });
    if (asientos.length == 0) {
      return res.status(404).json({ message: "asiento no encontrado" });
    } else {
      return res
        .status(200)
        .json({ message: "Asiento obtenido", datos: asientos });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
export const eliminarPorId: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const asiento: AsientoContable | null = await AsientoContable.findByPk(id);
    //    console.log(asientoContable);
    if (asiento == null) {
      return res
        .status(404)
        .json({ message: "Asiento no encontrado", datos: id });
    } else {
      await asiento.destroy();
      res.status(200).json({ message: "Asiento contable eliminado", datos: id });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
export const eliminarPorCodigo: RequestHandler = async (req, res, next) => {
  try {
    const { codigoAsiento } = req.params;
    const asientos: AsientoContable[] = await AsientoContable.findAll({
      where: { codigoAsiento },
    });
    // console.log(asientos);
    if (asientos.length == 0) {
      return res.status(404).json({ message: "Asientos no encontrados" });
    } else {
      await AsientoContable.destroy({ where: { codigoAsiento } });
      return res.status(200).json({ message: "Asientos eliminados" });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};

