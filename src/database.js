import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

class Database {
    constructor() {
        this.connection = null;
    }

    async connect() {
        try {
            if (!this.connection) {
                this.connection = await mongoose.connect(process.env.MONGO_URL);
                console.log("Conectados a la BD");
            }
            return this.connection;
        } catch (error) {
            console.error("Error al conectar a la base de datos:", error);
            throw error;
        }
    }

    async disconnect() {
        try {
            if (this.connection) {
                await mongoose.disconnect();
                console.log("Desconectados de la BD");
                this.connection = null;
            }
        } catch (error) {
            console.error("Error al desconectar de la base de datos:", error);
            throw error;
        }
    }
}

const database = new Database();

export default database;
