import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(cookieParser());

app.use("/server/auth", authRoutes);
app.use("/server/users", userRoutes);

app.listen(8800, () => {
  console.log("Api working");
});
