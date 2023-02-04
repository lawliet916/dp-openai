import { Router } from "express";
import { openaiController } from "./controllers/openaiController.js";

const routes = Router();

routes.post("/", openaiController);

export { routes };
