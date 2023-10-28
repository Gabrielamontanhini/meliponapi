import { getTodasAbelhasDB } from "../repositories/abelhas-repository.js";

export async function getTodasAbelhasService(){
    return await getTodasAbelhasDB()
}