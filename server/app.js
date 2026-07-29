import express from "express";
import cors from "cors";
import loanRoutes from "./routes/loanRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/loans", loanRoutes);

app.get("/", (req, res) => {
  res.send("loan application system Backend is Running");
});
export default app;