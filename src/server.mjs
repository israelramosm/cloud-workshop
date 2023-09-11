import express from "express";

import dotenv from "dotenv";
import serverRoutes from "./routes/server.mjs";
import cloudantRoutes from "./routes/cloudant.mjs";
import cosRoutes from "./routes/cos.mjs";

dotenv.config();

const app = express();
const port = process.env.port;

app.use(express.json());

app.use("/api", serverRoutes, cloudantRoutes, cosRoutes);

app.get("/", (req, res) => {
    console.log(req.body);
    res.json({ message: "hello world!!" });
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
