# API Digimon

Esta é uma API para listar e buscar Digimons usando Express e Prisma com MongoDB.

## Dependências

- [Express](https://expressjs.com/)   | Framework para gerenciar rotas, requisições e respostas HTTP.
- [Prisma](https://www.prisma.io/)    | ORM para acesso ao banco de dados.
- [MongoDB](https://www.mongodb.com/) | MongoDB banco de dados onde esta armazenado as infos sobre os digimons.
- [cors](https://www.npmjs.com/package/cors) | Middleware para habilitar CORS (Cross-Origin Resource Sharing).
- [nodemon](https://www.npmjs.com/package/nodemon) | Ferramenta que reinicia automaticamente o servidor Node.js quando arquivos são alterados.

## Endpoints da API

#### Listar todos os Digimons
  - URL: /api/digimons
  - Método: GET
  - Resposta: Lista de todos os Digimons.

#### Buscar Digimon pelo Nome
  - URL: /api/digimons/name/:name
  - Método: GET
  - Parâmetros:
      - name (string): Nome do Digimon.
  - Resposta: Detalhes do Digimon correspondente.

#### Buscar Digimon pelo Nível
  - URL: /api/digimons/level/:level
  - Método: GET
  - Parâmetros:
      - level (string): Nível do Digimon.
  - Resposta: Lista de Digimons no nível especificado.
