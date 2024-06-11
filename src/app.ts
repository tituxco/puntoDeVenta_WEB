import express from "express"
import dotenv from "dotenv";
import { json, urlencoded } from "body-parser";
import { connection } from "./db/config";
import rutasAsientos from "./rutas/asientosRutas";
import rutasClientes from "./rutas/clientesRutas";
import rutasLocalidades from "./rutas/localidadesRutas";
import rutasConfFiscal from "./rutas/confFiscalRutas";
import rutasTipoContribuyente from "./rutas/tipoContribuyenteRutas";
dotenv.config();


const app = express()
app.use(json())
app.use(urlencoded({extended:true}))
//rutas de asientos contables
app.use("/asientosContables",rutasAsientos)
//ruta de clientes
app.use("/clientes",rutasClientes)
//rutas de localidades
app.use ("/localidades",rutasLocalidades)
//rutas conffiscal
app.use("/confFiscal",rutasConfFiscal)
//tipo contribuyente
app.use("/tipoContribuyente",rutasTipoContribuyente)


connection.sync().then(()=>{
    console.log("base de datos sincronizada correctamente")
}).catch((err)=>{
    console.log("error",err)
})

app.listen(process.env.EXPRESS_PORT)

