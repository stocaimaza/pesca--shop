import ProductoModel  from "../models/productos.models.js";

class ProductoController {
    async obtenerProductos(req, res) {
        try {
            const productos = await ProductoModel.find();
            res.json(productos);
        } catch (error) {
            res.status(500).send("Error interno del servidor al obtener los productos")
        }
    }
}

export default new ProductoController(); 

