import express from "express"
import dotenv from "dotenv";
import { json, urlencoded } from "body-parser";
import { connection } from "./db/config";
import rutasAsientos from "./rutas/asientosRutas";
import rutasClientes from "./rutas/clientesRutas";
import rutasLocalidades from "./rutas/localidadesRutas";
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



connection.sync().then(()=>{
    console.log("base de datos sincronizada correctamente")
}).catch((err)=>{
    console.log("error",err)
})

app.listen(process.env.EXPRESS_PORT)

