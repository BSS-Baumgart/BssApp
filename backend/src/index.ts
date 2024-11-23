import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/dbConfig";
import authRoutes from "./routes/authRoutes";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Test DB connection
sequelize
  .authenticate()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((error) => console.error("Failed to connect to DB:", error));

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
