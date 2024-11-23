import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
console.log("db pass : " + process.env.DB_PASS);
console.log("db name : " + process.env.DB_NAME);
console.log("db user : " + process.env.DB_USER);
console.log("db host : " + process.env.DB_HOST);

const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASS!,
  {
    host: process.env.DB_HOST!,
    dialect: "postgres" as "postgres",
  }
);

export default sequelize;
