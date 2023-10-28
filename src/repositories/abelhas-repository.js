import { db } from "../database/database-connection.js";

export async function getTodasAbelhasDB(){
    const result = await db.query(`SELECT an.id, an.nome_cientifico, an.nome_popular, STRING_AGG(eb.sigla, ', ') AS estados
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


export async function getAbelhasPorEstadoDB(sigla){
    const result = await db.query(`SELECT an.id AS abelha_id, an.nome_cientifico
    FROM estados_brasileiros eb
    LEFT JOIN abelhas_ocorrencia ao ON eb.id = ao.id_estado
    LEFT JOIN abelhas_nativas an ON ao.id_abelha = an.id
    WHERE eb.sigla = $1;`, [sigla])
    return result
}


export async function getAbelhaPorNomeParamDB(nome){
    const result = await db.query(`SELECT an.id, an.nome_cientifico, an.nome_popular, STRING_AGG(eb.sigla, ', ') AS estados
    FROM abelhas_nativas an
    JOIN abelhas_ocorrencia ao ON an.id = ao.id_abelha
    JOIN estados_brasileiros eb ON ao.id_estado = eb.id
    WHERE 
      LOWER(REPLACE(an.nome_cientifico, ' ', '')) LIKE '%' || $1 || '%' OR
      LOWER(REPLACE(an.nome_popular, ' ', '')) LIKE '%' || $1 || '%'
    GROUP BY an.id, an.nome_cientifico, an.nome_popular;
    `, [nome])
      return result
}