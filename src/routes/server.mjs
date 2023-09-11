import express from "express";
import { getServer, postServer } from "../controller/server.mjs";

const serverRoutes = express.Router();

serverRoutes.get("/server", getServer);
serverRoutes.post("/server", postServer);

export default serverRoutes;
