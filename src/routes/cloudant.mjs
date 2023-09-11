import express from "express";
import {
  getDoc,
  getDocs,
  postDoc,
  patchDoc,
  deleteDoc,
} from "../controller/cloudant.mjs";

const cloudantRoutes = express.Router();
const cloudantRoute = "/cloudant";

cloudantRoutes.get(cloudantRoute, getDocs);
cloudantRoutes.post(cloudantRoute, postDoc);
cloudantRoutes.get(`${cloudantRoute}/:id`, getDoc);
cloudantRoutes.patch(`${cloudantRoute}/:id`, patchDoc);
cloudantRoutes.delete(`${cloudantRoute}/:id`, deleteDoc);

export default cloudantRoutes;
