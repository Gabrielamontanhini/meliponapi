import { getTodasRegioesService, getTodosEstadosService } from "../services/estados-services.js";

export async function getTodosEstadosController(req, res){
    const todosEstados = await getTodosEstadosService()
    return res.status(200).send(todosEstados.rows)
}


export async function getTodasRegioesController(req, res){
    const todosRegioes = await getTodasRegioesService()
    return res.status(200).send(todosRegioes.rows)
}

