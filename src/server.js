import express from "express";
import { routes } from "./routes.js";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000, () =>
  console.log("Server is living on port 3000 🚀, http://localhost:3000/")
);
