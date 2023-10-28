import { Router } from "express";
import { getTodosEstadosController } from "../controllers/estados-controllers.js";

const estadosRouter = Router()

estadosRouter.get("/estados", getTodosEstadosController)
//estadosRouter.get("/regiao")


export default estadosRouter