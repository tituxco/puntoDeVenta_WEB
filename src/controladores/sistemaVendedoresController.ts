import { RequestHandler } from "express";
import { SistemaVendedores } from "../modelos/sistemaVendedoresModelo";

export const crear: RequestHandler = async (req, res, next) => {
  try {
    var nuevo = await SistemaVendedores.create({ ...req.body });
    return res.status(200).json({ message: "vendedor agregado", datos: nuevo });
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};

export const modificar: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.body;
    const vendedor: SistemaVendedores | null = await SistemaVendedores.findByPk(
      id
    );
    if (vendedor == null) {
      return res.status(404).json({ message: "vendedor no encontrado" });
    } else {
      await vendedor.update({ ...req.body });
      return res
        .status(200)
        .json({ message: "Vendedor modificado", datos: vendedor });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};

export const eliminarPorId: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const vendedor: SistemaVendedores | null = await SistemaVendedores.findByPk(
      id
    );
    //  console.log(clientes);
    if (vendedor == null) {
      return res.status(404).json({ message: "vendedor no encontrado" });
    } else {
      await vendedor.destroy();
      return res
        .status(200)
        .json({ message: "vendedor eliminado", data: vendedor });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};

export const obtenerTodo: RequestHandler = async (req, res, next) => {
  try {
    const vendedor: SistemaVendedores[] = await SistemaVendedores.findAll();
    if (vendedor.length == 0) {
      return res.status(404).json({ message: "no se encontraron vendedores" });
    } else {
      return res
        .status(200)
        .json({ message: "vendedores obtenidos", datos: vendedor });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
export const obtenerPorId: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const vendedor: SistemaVendedores | null = await SistemaVendedores.findByPk(
      id
    );
    //  console.log(clientes);
    if (vendedor == null) {
      return res
        .status(404)
        .json({ message: "vendedor no encontrado", datos: id });
    } else {
      return res
        .status(200)
        .json({ message: "vendedor obtenido", data: vendedor });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
