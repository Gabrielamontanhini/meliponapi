import { getTodosEstadosDB } from "../repositories/estados-repository.js";

export async function getTodosEstadosService(){
    return await getTodosEstadosDB()
}