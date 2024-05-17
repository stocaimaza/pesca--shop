import {Router} from "express";
const router = Router(); 
import productosController from "../controller/productos.controller.js";

router.get("/", productosController.obtenerProductos);

export default router; 