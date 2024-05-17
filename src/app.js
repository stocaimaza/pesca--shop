import express from "express";
import productosRouter from "./router/productos.router.js";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Conectados a la BD"))

const app = express();

//Middleware 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//Rutas
app.get("/", (req, res) => {
    res.send("Hola mundo");
})
app.use("/api/productos", productosRouter);


app.listen(8080, () => {
    console.log(`Escuchando en el puerto 8080`);
})