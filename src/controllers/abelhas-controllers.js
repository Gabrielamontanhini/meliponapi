import { getAbelhaPorIdService, getAbelhasPorEstadoService, getTodasAbelhasService } from "../services/abelhas-services.js";

export async function getTodasAbelhasController(req, res){
    const { nome } = req.query
    const todasAbelhas = await getTodasAbelhasService(nome)
    res.status(200).send(todasAbelhas.rows)
}

export async function getAbelhaPorIdController(req, res){
    const { id } = req.params
    const abelhaProcurada = await getAbelhaPorIdService(id)
    res.status(200).send(abelhaProcurada.rows)
}

export async function getAbelhasPorEstadoController(req, res){
    const { sigla } = req.params
    const abelhasPorEstado = await getAbelhasPorEstadoService(sigla)
    res.status(200).send(abelhasPorEstado.rows)
}