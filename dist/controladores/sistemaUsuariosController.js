"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarUsuario = exports.eliminarPorId = exports.modificar = exports.crear = void 0;
const sistemaUsuariosModelo_1 = require("../modelos/sistemaUsuariosModelo");
const bcrypt_1 = __importDefault(require("bcrypt"));
const crear = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var nuevo = yield sistemaUsuariosModelo_1.SistemaUsuarios.create(Object.assign({}, req.body));
        return res.status(200).json({ message: "usuario agregado", datos: nuevo });
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.crear = crear;
const modificar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const usuario = yield sistemaUsuariosModelo_1.SistemaUsuarios.findByPk(id);
        if (usuario == null) {
            return res.status(404).json({ message: "usuario no encontrado" });
        }
        else {
            yield usuario.update(Object.assign({}, req.body));
            return res
                .status(200)
                .json({ message: "Usuario modificado", datos: usuario });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.modificar = modificar;
const eliminarPorId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const usuario = yield sistemaUsuariosModelo_1.SistemaUsuarios.findByPk(id);
        //  console.log(clientes);
        if (usuario == null) {
            return res.status(404).json({ message: "usuario no encontrado" });
        }
        else {
            yield usuario.destroy();
            return res
                .status(200)
                .json({ message: "usuario eliminado", data: usuario });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "error de servidor", error });
    }
});
exports.eliminarPorId = eliminarPorId;
const validarUsuario = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { usuario } = req.body;
        const usuarioExiste = yield sistemaUsuariosModelo_1.SistemaUsuarios.findOne({ where: { usuario } });
        if (usuarioExiste == null) {
            res.status(400).json({
                message: "Usuario inexistente, por favor verifique los datos ingresados",
            });
        }
        //validacion
        else {
            if (bcrypt_1.default.compareSync(req.body.contrasena, usuarioExiste.contrasena)) {
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
            }
            else {
                res.status(400).json({
                    message: "error de autenticacion de usuario, por favor verifique los datos ingresados",
                });
            }
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error de servidor ", error });
    }
});
exports.validarUsuario = validarUsuario;
