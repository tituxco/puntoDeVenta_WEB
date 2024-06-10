import { Sequelize } from "sequelize-typescript";
//import { Todos } from "../modelos/todos";
import dotenv from "dotenv";
import { AsientoContable } from "../modelos/asientosModelo";
import { Clientes } from "../modelos/clientesModelo";
import { Localidades } from "../modelos/localidadesModelo";

dotenv.config();

export const connection= new Sequelize({
    dialect:"mysql",
    host:process.env.MYSQL_HOST,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DB_NAME,
    logging:false,
    models:[AsientoContable,Clientes,Localidades]
})