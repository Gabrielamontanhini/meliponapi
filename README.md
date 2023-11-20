# MeliponAPI
A MeliponAPI é uma API que fornece informações sobre abelhas nativas sem ferrão no Brasil.
Os dados utilizados foram adquiridos do **Instituto Chico Mendes de Conservação da Biodiversidade** através da **Portaria nº 665, de 3 de novembro de 2021**, que institui o
*Catálogo Nacional de Abelhas-Nativas-Sem Ferrão* no âmbito do processo **02070.004380/2020-13**.


# Demo
O link base da MeliponAPI é [https://meliponapi-api.onrender.com]

# Como funciona?
Este projeto é uma API REST para atender a aplicação de abelhas nativas sem ferrão no Brasil. Ela possui dados sobre as abelhas com as seguintes rotas:


- GET `/abelhas`: Retorna todas as notícias cadastradas, em um array de objetos, e aceita uma query string `?nome=` para pesquisar abelhas por nome científico ou popular. Retorna um array de objetos no formato a seguir:

  
- GET `/abelhas/:id`: Rota para buscar informações sobre uma abelha específica com base em seu ID. Retorna um array com um objeto com o seguinte formato:


 ```
{
 "id": number
 "nome_cientifico": string
 "nome_popular": string
 "estados": string || null
}
```

- GET `/abelhas/estado/:sigla`: Rota que retorna abelhas que ocorrem em um estado específico com base na sigla do estado. Retorna um array com objetos , no seguinte formado:

```
{
 "abelha_id": number
 "nome_cientifico": string
}
```


# Motivação
Este projeto foi feito para praticar a construção de uma API REST usando o ecossistema Node e Express e ajudar na identificação de abelhas em ocorrência nos estados.

# Tecnologias utilizadas
Para este projeto, foram utilizadas:

- Node (versão 20.9.0);
- Express;
- Postgres;
- Redis;


# Como rodar em desenvolvimento
Para executar este projeto em desenvolvimento, é necessário seguir os passos abaixo:

- Clonar o repositório;
- Baixar as dependências necessárias com o comando: `npm install`;
- Em seguida, criar o arquivo `.env`;
- Este arquivo `.env` é composto pelas seguintes propriedades:
```
  DATABASE_URL="postgresql://postgres..."
```
- A propriedade `DATABASE_URL` é usada para fazer a conexão com o banco de dados.
- Para rodar o projeto em desenvolvimento, execute o comando `npm run dev`;
- Adicione as abelhas diretamente no banco para consultá-las

