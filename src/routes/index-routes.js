import { Router } from "express";
import abelhasRouter from "./abelhas-routes.js";
import estadosRouter from "./estados-routes.js";

const router = Router()
router.use(abelhasRouter)
router.use(estadosRouter)

export default router