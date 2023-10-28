import { Router } from "express";
import abelhasRouter from "./abelhas-routes.js";

const router = Router()
router.use(abelhasRouter)

export default router