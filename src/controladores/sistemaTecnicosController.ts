import { RequestHandler } from "express";
import { SistemaTecnicos } from "../modelos/sistemaTecnicosModelos";

export const crear: RequestHandler = async (req, res, next) => {
  try {
    var nuevo = await SistemaTecnicos.create({ ...req.body });
    return res.status(200).json({ message: "tecnico agregado", datos: nuevo });
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};

export const modificar: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.body;
    const tecnico: SistemaTecnicos | null = await SistemaTecnicos.findByPk(
      id
    );
    if (tecnico == null) {
      return res.status(404).json({ message: "tecnico no encontrado" });
    } else {
      await tecnico.update({ ...req.body });
      return res
        .status(200)
        .json({ message: "Tecnico modificado", datos: tecnico });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};

export const eliminarPorId: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tecnico: SistemaTecnicos | null = await SistemaTecnicos.findByPk(
      id
    );
    //  console.log(clientes);
    if (tecnico == null) {
      return res.status(404).json({ message: "tecnico no encontrado" });
    } else {
      await tecnico.destroy();
      return res
        .status(200)
        .json({ message: "tecnico eliminado", data: tecnico });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};

export const obtenerTodo: RequestHandler = async (req, res, next) => {
  try {
    const tecnico: SistemaTecnicos[] = await SistemaTecnicos.findAll();
    if (tecnico.length == 0) {
      return res.status(404).json({ message: "no se encontraron tecnicoes" });
    } else {
      return res
        .status(200)
        .json({ message: "tecnicoes obtenidos", datos: tecnico });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
export const obtenerPorId: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tecnico: SistemaTecnicos | null = await SistemaTecnicos.findByPk(
      id
    );
    //  console.log(clientes);
    if (tecnico == null) {
      return res
        .status(404)
        .json({ message: "tecnico no encontrado", datos: id });
    } else {
      return res
        .status(200)
        .json({ message: "tecnico obtenido", data: tecnico });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
