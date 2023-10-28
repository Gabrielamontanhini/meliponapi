import { getTodasAbelhasService } from "../services/abelhas-services.js";

export async function getTodasAbelhasController(req, res){
    const todasAbelhas = await getTodasAbelhasService()
    res.status(200).send(todasAbelhas.rows)
}