import dotenv from "dotenv";
dotenv.config();

const dbConfig = {
    url: process.env.DB_CON,
} 
export default dbConfig;
