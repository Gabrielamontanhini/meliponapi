import { Router } from "express";
import { getTodasAbelhasController } from "../controllers/abelhas-controllers.js";

const abelhasRouter = Router()

abelhasRouter.get("/abelhas", getTodasAbelhasController)

export default abelhasRouter