import { RequestHandler } from "express";
import { Clientes } from "../modelos/clientesModelo";
import { Op } from "sequelize";

export const crear: RequestHandler = async (req, res, next) => {
  try {
    var nuevo = await Clientes.create({ ...req.body });
    return res.status(200).json({ message: "Cliente agregado", datos: nuevo });
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
export const modificar: RequestHandler = async (req, res, next) => {
  try {
    const { idclientes } = req.body;
    const cliente: Clientes | null = await Clientes.findByPk(idclientes);
    if (cliente==null){
        return res.status(404).json({message:"cliente no encontrado"})
    }else{
        await cliente.update({ ...req.body });
        return res.status(200).json({ message: "Cliente modificado", datos: cliente });
    }    
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
export const obtenerTodo: RequestHandler = async (req, res, next) => {
  try {
    const clientes: Clientes[] = await Clientes.findAll();
    if (clientes.length == 0) {
      return res.status(404).json({ message: "no se encontraron clientes" });
    } else {
      return res
        .status(200)
        .json({ message: "Clientes obtenidos", datos: clientes });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
export const obtenerPorId: RequestHandler = async (req, res, next) => {
  try {
    const { idclientes } = req.params;
    const cliente: Clientes | null = await Clientes.findByPk(idclientes);
    //  console.log(clientes);
    if (cliente == null) {
      return res
        .status(404)
        .json({ message: "Cliente no encontrado", datos: idclientes });
    } else {
      return res
        .status(200)
        .json({ message: "Cliente obtenido", data: idclientes });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
export const obtenerPorCodigo: RequestHandler = async (req, res, next) => {
  try {
    const { codClie } = req.params;
    //console.log(codigoCliente);
    const clientes: Clientes[] = await Clientes.findAll({
      where: { codClie },
    });
    if (clientes.length == 0) {
      return res.status(404).json({ message: "cliente no encontrado" });
    } else {
      return res
        .status(200)
        .json({ message: "Cliente obtenido", datos: clientes });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "error de servidclientesor", error });
  }
};
export const busquedaGeneral: RequestHandler = async (req, res, next) => {
  try {
    let { parametro } = req.params;
    parametro = parametro.replace(" ", "%");
    //console.log(parametro);
    const clientes: Clientes[] = await Clientes.findAll({
      where: {
        [Op.or]: [
          { nomapell_razon: { [Op.like]: `%${parametro}%` } },
          { dir_domicilio: { [Op.like]: `%${parametro}%` } },
          { cuit: { [Op.like]: `%${parametro}%` } },
          { telefono: { [Op.like]: `%${parametro}%` } },
          { celular: { [Op.like]: `%${parametro}%` } },
          { email: { [Op.like]: `%${parametro}%` } },
          { codClie: { [Op.like]: `%${parametro}%` } },
          { observaciones: { [Op.like]: `%${parametro}%` } },
        ],
      },
    });
    if (clientes.length == 0) {
      return res.status(404).json({ message: "cliente no encontrado" });
    } else {
      return res
        .status(200)
        .json({ message: "Cliente obtenido", datos: clientes });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
export const busquedaLocalidad: RequestHandler = async (req, res, next) => {
  try {
    let { dir_localidad } = req.params;
    //console.log(parametro);
    const clientes: Clientes[] = await Clientes.findAll({
      where: { dir_localidad },
    });
    if (clientes.length == 0) {
      return res.status(404).json({ message: "cliente no encontrado" });
    } else {
      return res
        .status(200)
        .json({ message: "Cliente obtenido", datos: clientes });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
export const busquedaFecha: RequestHandler = async (req, res, next) => {
  try {
    let { desde } = req.body;
    let { hasta } = req.body;
    //console.log(desde,hasta);
    const clientes: Clientes[] = await Clientes.findAll({
      where: { createdAt: { [Op.between]: [desde, hasta] } },
    });
    if (clientes.length == 0) {
      return res.status(404).json({ message: "cliente no encontrado" });
    } else {
      return res
        .status(200)
        .json({ message: "Cliente obtenido", datos: clientes });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", data: error });
  }
};
export const eliminarPorId: RequestHandler = async (req, res, next) => {
  try {
    const { idclientes } = req.params;
    const cliente: Clientes | null = await Clientes.findByPk(idclientes);
    //    console.log(clientes);
    if (cliente == null) {
      return res
        .status(404)
        .json({ message: "Cliente no encontrado", datos: idclientes });
    } else {
      await cliente.destroy();
      res
        .status(200)
        .json({ message: "Cliente eliminado", datos: idclientes });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
export const eliminarPorCodigo: RequestHandler = async (req, res, next) => {
  try {
    const { codigoCliente } = req.params;
    const clientes: Clientes[] = await Clientes.findAll({
      where: { codigoCliente },
    });
    // console.log(clientes);
    if (clientes.length == 0) {
      return res.status(404).json({ message: "Clientes no encontrados" });
    } else {
      await Clientes.destroy({ where: { codigoCliente } });
      return res.status(200).json({ message: "Clientes eliminados" });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};
