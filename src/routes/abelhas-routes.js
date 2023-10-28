import { Router } from "express";
import { getAbelhaPorIdController, getAbelhasPorEstadoController, getTodasAbelhasController } from "../controllers/abelhas-controllers.js";

const abelhasRouter = Router()

abelhasRouter.get("/abelhas", getTodasAbelhasController)
abelhasRouter.get("/abelhas/:id", getAbelhaPorIdController)
abelhasRouter.get("/abelhas/estados/:sigla", getAbelhasPorEstadoController)

export default abelhasRouter