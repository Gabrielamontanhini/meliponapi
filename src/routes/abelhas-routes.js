import { Router } from "express";
import { getAbelhaPorIdController, getTodasAbelhasController } from "../controllers/abelhas-controllers.js";

const abelhasRouter = Router()

abelhasRouter.get("/abelhas", getTodasAbelhasController)
abelhasRouter.get("/abelhas/:id", getAbelhaPorIdController)

export default abelhasRouter