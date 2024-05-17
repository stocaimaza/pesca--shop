import { Schema, model } from "mongoose";

const schema = new Schema({
    titulo: String, 
    descripcion: String, 
    precio: Number, 
    stock: Number
});

const ProductoModel = model("productos", schema); 

export default ProductoModel;