import { db } from "../database/database-connection.js";

export async function getTodasAbelhasDB(){
    const result = await db.query(`SELECT an.id, an.nome_cientifico, STRING_AGG(eb.sigla, ', ') AS estados
    FROM abelhas_nativas an
    JOIN abelhas_ocorrencia ao ON an.id = ao.id_abelha
    JOIN estados_brasileiros eb ON ao.id_estado = eb.id
    GROUP BY an.id, an.nome_cientifico;    
    `)
    return result
}

export async function getAbelhaPorIdDB(id){
    const result = await db.query(`SELECT
    an.id AS id_abelha,
    an.nome_cientifico,
    STRING_AGG(eb.sigla, ', ') AS estados,
    STRING_AGG(DISTINCT rb.região, ', ') AS regiões
FROM abelhas_nativas an
LEFT JOIN abelhas_ocorrencia ao ON an.id = ao.id_abelha
LEFT JOIN estados_brasileiros eb ON ao.id_estado = eb.id
LEFT JOIN estados_regiões er ON eb.id = er.id_estado
LEFT JOIN regiões rb ON er.id_região = rb.id
WHERE an.id = $1
GROUP BY an.id, an.nome_cientifico;`, [id])

  return result
}