import { getTodasRegioesDB, getTodosEstadosDB } from "../repositories/estados-repository.js";

export async function getTodosEstadosService(){
    return await getTodosEstadosDB()
}

export async function getTodasRegioesService(){
    return await getTodasRegioesDB()
}