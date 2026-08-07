import express from "express";
import { googleAuth, logout } from "../controllers/auth.controller.js";

const auth = express.Router();

auth.post("/login",googleAuth);
auth.get("/logout", logout);

export default auth;