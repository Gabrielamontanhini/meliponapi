# MeliponAPI

## Sobre

A MeliponAPI é uma API que fornece informações sobre abelhas nativas sem ferrão no Brasil.
Os dados utilizados foram adquiridos do **Instituto Chico Mendes de Conservação da Biodiversidade** através da **Portaria nº 665, de 3 de novembro de 2021**, que institui o
*Catálogo Nacional de Abelhas-Nativas-SemFerrão* no âmbito do processo **02070.004380/2020-13**.

## Recursos Disponíveis de get

### get /abelhas

- Rota principal para obter informações sobre as abelhas nativas sem ferrão.
- Retorna um array de objetos no formato: {
                                            "id": número do id,
                                            "nome_cientifico": "Nome da abelha",
                                            "nome_popular": pode ser nulo,
                                            "estados": Siglas dos estados de ocorrência
                                            } .
- Aceita uma query string `?nome=` para pesquisar abelhas por nome científico ou popular. Retorna um array de objetos, se houver resultados, no formato:  {
                                            "id": número do id,
                                            "nome_cientifico": "Nome da abelha",
                                            "nome_popular": pode ser nulo,
                                            "estados": Siglas dos estados de ocorrência
                                            }

### get /abelhas/:id

- Rota para buscar informações sobre uma abelha específica com base em seu ID. Retorna um array com um objeto no formato: [
  {
    "id_abelha": 12,
    "nome_cientifico": "Tetragona clavipes",
    "estados": "AC, AM, RO, AP, RR, PA, MA, PI, MT, SE, BA, GO, GO, DF, MG, MS, ES, RJ, RJ, SP, PR, PR, SC, RS",
    "regioes": "Centro-Oeste, Nordeste, Norte, Sudeste, Sul"
  }
]

### get /abelhas/estados/:sigla

- Rota que retorna abelhas que ocorrem em um estado específico com base na sigla do estado. Retorna um array com objetos , no seguinte formado: [
  {
    "abelha_id": 3,
    "nome_cientifico": "Trigona pallens"
  },
  {
    "abelha_id": 6,
    "nome_cientifico": "Tetragonisca fiebrigi"
  }]
## Avisos

Esta é uma API em expansão e está atualmente em fase experimental. Além disso, este é um deploy gratuito e, portanto, pode estar sujeito a limitações.

## Base URL

O link base da MeliponAPI é [https://meliponapi-api.onrender.com](https://meliponapi-api.onrender.com).
