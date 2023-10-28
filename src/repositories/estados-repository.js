import { db } from "../database/database-connection.js";

export async function getTodosEstadosDB(){
    const result = await db.query(`SELECT * FROM estados_brasileiros`)
    return result
}