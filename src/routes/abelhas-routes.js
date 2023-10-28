import { Router } from "express";
import { getAbelhaPorIdController, getAbelhasPorEstadoController, getTodasAbelhasController, updateNomePopularController } from "../controllers/abelhas-controllers.js";

const abelhasRouter = Router()

abelhasRouter.get("/abelhas", getTodasAbelhasController)
abelhasRouter.get("/abelhas/:id", getAbelhaPorIdController)
abelhasRouter.get("/abelhas/estados/:sigla", getAbelhasPorEstadoController)
abelhasRouter.patch("/abelhas/:id", updateNomePopularController)



export default abelhasRouter