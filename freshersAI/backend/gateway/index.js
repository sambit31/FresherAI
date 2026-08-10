import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import proxy from "express-http-proxy";
import morgan from "morgan";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(morgan('dev')); // Log HTTP requests to the console   
app.use(cookieParser());


const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the FreshersAI Gateway!");
});

app.use("/api/auth", proxy(process.env.AUTH_SERVICE_URL));



app.listen(PORT, () => {
  console.log(`Gateway is running on http://localhost:${PORT}`);
});