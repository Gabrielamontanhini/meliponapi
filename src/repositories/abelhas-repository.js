import { db } from "../database/database-connection.js";

export async function getTodasAbelhasDB(){
    const result = await db.query(`SELECT an.nome_cientifico, STRING_AGG(eb.sigla, ', ') AS estados
    FROM abelhas_nativas an
    JOIN abelhas_ocorrencia ao ON an.id = ao.id_abelha
    JOIN estados_brasileiros eb ON ao.id_estado = eb.id
    GROUP BY an.nome_cientifico;
    `)
    return result
}