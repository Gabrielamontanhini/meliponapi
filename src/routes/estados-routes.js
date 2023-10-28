import { Router } from "express";
import { getTodasRegioesController, getTodosEstadosController } from "../controllers/estados-controllers.js";

const estadosRouter = Router()

estadosRouter.get("/estados", getTodosEstadosController)
estadosRouter.get("/regioes", getTodasRegioesController)


export default estadosRouter