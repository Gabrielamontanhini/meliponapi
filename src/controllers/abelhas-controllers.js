import { getAbelhaPorIdService, getTodasAbelhasService } from "../services/abelhas-services.js";

export async function getTodasAbelhasController(req, res){
    const todasAbelhas = await getTodasAbelhasService()
    res.status(200).send(todasAbelhas.rows)
}

export async function getAbelhaPorIdController(req, res){
    const { id } = req.params
    const abelhaProcurada = await getAbelhaPorIdService(id)
    res.status(200).send(abelhaProcurada.rows)
}