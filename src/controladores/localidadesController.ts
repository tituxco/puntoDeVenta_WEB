import { RequestHandler } from "express";
import { Localidades } from "../modelos/localidadesModelo";

export const crear: RequestHandler = async (req, res, next) => {
  try {
    const { nombre } = req.body;
    const encontrada: Localidades[] = await Localidades.findAll({
      where: { nombre },
    });
    if (encontrada.length == 0) {
      var nuevo = await Localidades.create({ ...req.body });
      return res
        .status(200)
        .json({ message: "Localidad creada", datos: nuevo });
    }else{
      return res
        .status(404)
        .json({ message: "Localidad ya existe", datos: encontrada });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
export const obtenerTodo: RequestHandler = async (req, res, next) => {
  try {
    const localidad: Localidades[] = await Localidades.findAll();
    if (localidad.length == 0) {
      return res.status(404).json({ message: "no se encontraron localidades" });
    } else {
      return res
        .status(200)
        .json({ message: "Localidades obtenidas", datos: localidad });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
export const modificar:RequestHandler=async(req,res,next)=>{
  try {
    const { id } = req.body;
    const localidad: Localidades | null = await Localidades.findByPk(id);
    //  console.log(localidades);
    if (localidad == null) {
      return res
        .status(404)
        .json({ message: "Localidad no encontrado", datos: id });
    } else {
      await localidad.update({...req.body})
      return res.status(200).json({ message: "localidad modificada", data: localidad });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
}
export const obtenerPorId: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const localidad: Localidades | null = await Localidades.findByPk(id);
    //  console.log(localidades);
    if (localidad == null) {
      return res
        .status(404)
        .json({ message: "Localidad no encontrado", datos: id });
    } else {
      return res.status(200).json({ message: "localidad obtenido", data: id });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
export const eliminarPorId: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const localidad: Localidades | null = await Localidades.findByPk(id);
    //    console.log(localidades);
    if (localidad == null) {
      return res
        .status(404)
        .json({ message: "localidad encontrado", datos: id });
    } else {
      await localidad.destroy();
      res.status(200).json({ message: "Localidad eliminado", datos: id });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
