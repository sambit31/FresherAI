import express from "express"
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./configs/db.js";
import auth from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";


const app = express();
app.use(express.json());
app.use(cookieParser())

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Welcome to the FreshersAI Auth service!");
});

app.use("/",auth);


app.listen(PORT, () => {
    console.log(`Auth service is running on http://localhost:${PORT}`);
    connectDB();
});