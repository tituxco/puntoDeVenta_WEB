import { RequestHandler } from "express";
import { SistemaUsuarios } from "../modelos/sistemaUsuariosModelo";
import { Op } from "sequelize";
import { Jwt } from "jsonwebtoken";
import bcrypt from "bcrypt";

export const crear: RequestHandler = async (req, res, next) => {
  try {
    var nuevo = await SistemaUsuarios.create({ ...req.body });
    return res.status(200).json({ message: "usuario agregado", datos: nuevo });
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};

export const modificar: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.body;
    const usuario: SistemaUsuarios | null = await SistemaUsuarios.findByPk(id);
    if (usuario == null) {
      return res.status(404).json({ message: "usuario no encontrado" });
    } else {
      await usuario.update({ ...req.body });
      return res
        .status(200)
        .json({ message: "Usuario modificado", datos: usuario });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};

export const eliminarPorId: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const usuario: SistemaUsuarios | null = await SistemaUsuarios.findByPk(id);
    //  console.log(clientes);
    if (usuario == null) {
      return res.status(404).json({ message: "usuario no encontrado" });
    } else {
      await usuario.destroy();
      return res
        .status(200)
        .json({ message: "usuario eliminado", data: usuario });
    }
  } catch (error) {
    return res.status(500).json({ message: "error de servidor", error });
  }
};

export const validarUsuario: RequestHandler = async (req, res, next) => {
  try {
    const { usuario } = req.body;
    const usuarioExiste: SistemaUsuarios | null = await SistemaUsuarios.findOne(
      { where: { usuario } }
    );
    if (usuarioExiste == null) {
      res.status(400).json({
        message:
          "Usuario inexistente, por favor verifique los datos ingresados",
      });
    }
    //validacion
    else {
      if (bcrypt.compareSync(req.body.contrasena, usuarioExiste.contrasena)) {
        /*const payload = {
          usuarioId: usuarioExiste._id,
          usuarioMail: usuarioExiste.email,
          usuarioPrivilegios: usuarioExiste.tipoUsuario,
        };
        
        //console.log (payload)
        //firmar token
        const token = jwt.sign(payload, "secreto", { expiresIn: "1h" });
        req.session.token = token;
        console.log(req.session.token);
        */
        res.status(200).json({
          message: "Usuario se ha logueado correctamente",
          usuarioExiste,
        });
      } else {
        res.status(400).json({
          message:
            "error de autenticacion de usuario, por favor verifique los datos ingresados",
        });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Error de servidor ", error });
  }
};
