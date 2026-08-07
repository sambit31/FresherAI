import express from "express"
import dotenv from "dotenv";
import proxy from "express-http-proxy";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the FreshersAI Gateway!");
});

app.use("/api/auth", proxy(process.env.AUTH_SERVICE_URL));



app.listen(PORT, () => {
  console.log(`Gateway is running on http://localhost:${PORT}`);
});