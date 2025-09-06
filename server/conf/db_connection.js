// db.js
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || "postgres",   // database name
  process.env.DB_USER || "postgres",   // username
  process.env.DB_PASS || "1996",       // password
  {
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "postgres",
    port: 5432,
    logging: false,
  }
);

// Test connection
const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connected to PostgreSQL successfully!");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
};

export { sequelize, connectToDB };
