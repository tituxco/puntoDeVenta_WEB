import express from "express"
import dotenv from "dotenv";
//import session from "express-session";
import { json, urlencoded } from "body-parser";
import { connection } from "./db/config";
import rutasAsientos from "./rutas/asientosRutas";
import rutasClientes from "./rutas/clientesRutas";
import rutasLocalidades from "./rutas/localidadesRutas";
import rutasConfFiscal from "./rutas/confFiscalRutas";
import rutasTipoContribuyente from "./rutas/tipoContribuyenteRutas";
import rutasSistemaUsuarios from "./rutas/sistemaUsuariosRutas";
import rutasSistemaVendedores from "./rutas/sistemaVendedoresRutas";
import rutasSistemaTecnicos from "./rutas/sistemaTecnicosRutas";
dotenv.config();


const app = express()
app.use(json())
app.use(urlencoded({extended:true}))

/*
app.use(
    session({
      secret: "secreto", //firmamos las cookies de sesion con una clave secreta
      resave: false, //evitar que se guarde si no hay datos
      saveUninitialized: false, //evita que se guarde una sesion que no se inicializo    
    })
  );

//rutas de asientos contables
*/
app.use("/asientosContables",rutasAsientos)
//ruta de clientes
app.use("/clientes",rutasClientes)
//rutas de localidades
app.use ("/localidades",rutasLocalidades)
//rutas conffiscal
app.use("/confFiscal",rutasConfFiscal)
//tipo contribuyente
app.use("/tipoContribuyente",rutasTipoContribuyente)
//usuarios de sistema
app.use("/sistemaUsuarios",rutasSistemaUsuarios)
//vendedores de sistema
app.use("/sistemaVendedores",rutasSistemaVendedores)
//tecnicos de sistema
app.use("/sistemaTecnicos",rutasSistemaTecnicos)

connection.sync().then(()=>{
    console.log("base de datos sincronizada correctamente")
}).catch((err)=>{
    console.log("error",err)
})

app.listen(process.env.EXPRESS_PORT)

