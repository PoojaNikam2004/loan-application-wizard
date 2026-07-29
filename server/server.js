import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import db from "./config/db.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(process.env.DB_USER);
  console.log({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
});