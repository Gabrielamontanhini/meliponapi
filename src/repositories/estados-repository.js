import { db } from "../database/database-connection.js";

export async function getTodosEstadosDB(){
    const result = await db.query(`SELECT * FROM estados_brasileiros`)
    return result
}

export async function getTodasRegioesDB(){
    const result = await db.query(`SELECT * FROM regiao_brasil`)
    return result
}