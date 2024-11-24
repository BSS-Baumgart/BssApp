import bcrypt from "bcrypt";
import User from "../models/user";

const initializeDb = async () => {
  try {
    await User.sync();

    const adminUser = await User.findOne({ where: { username: "admin" } });
    if (!adminUser) {
      const hashedPassword = await bcrypt.hash("admin", 10);
      await User.create({
        username: "admin",
        password: hashedPassword,
        role: "admin",
      });
      console.log("Admin user created");
    } else {
      console.log("Admin user already exists");
    }
  } catch (error) {
    console.error("Failed to initialize database:", error);
  }
};

export default initializeDb;
