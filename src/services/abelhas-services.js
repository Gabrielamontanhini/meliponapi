import { getAbelhaPorIdDB, getTodasAbelhasDB } from "../repositories/abelhas-repository.js";

export async function getTodasAbelhasService(){
    return await getTodasAbelhasDB()
}

export async function getAbelhaPorIdService(id){
    return await getAbelhaPorIdDB(id)
}