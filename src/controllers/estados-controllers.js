import { getTodosEstadosService } from "../services/estados-services.js";

export async function getTodosEstadosController(req, res){
    const todosEstados = await getTodosEstadosService()
    return res.status(200).send(todosEstados.rows)
}