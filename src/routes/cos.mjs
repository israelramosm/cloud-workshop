import express from "express";
import { getFile, getFiles, postFile, patchFile, deleteFile } from "../controller/cos.mjs";

const cosRoutes = express.Router();
const cosRoute = '/cos';

cosRoutes.get(cosRoute, getFiles);
cosRoutes.post(cosRoute, postFile);
cosRoutes.get(`${cosRoute}/:id`, getFile);
cosRoutes.patch(`${cosRoute}/:id`, patchFile);
cosRoutes.delete(`${cosRoute}/:id`, deleteFile);

export default cosRoutes;
