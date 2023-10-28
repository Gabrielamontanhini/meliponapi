import { getAbelhaPorIdDB, getAbelhaPorNomeParamDB, getAbelhasPorEstadoDB, getTodasAbelhasDB } from "../repositories/abelhas-repository.js";

export async function getTodasAbelhasService(nome){
    if (!nome) return await getTodasAbelhasDB()
    return await getAbelhaPorNomeParamDB(nome)
    
}

export async function getAbelhaPorIdService(id){
    return await getAbelhaPorIdDB(id)
}

export async function getAbelhasPorEstadoService(sigla){
    return await getAbelhasPorEstadoDB(sigla)
}