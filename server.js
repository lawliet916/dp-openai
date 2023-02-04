import { config } from "dotenv";
import express from "express";
import { routes } from "./src/routes.js";

config();

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000, () =>
  console.log("Server is living on port 3000 🚀, http://localhost:3000/")
);
