# Versões dos softwares utilizados:  
  - node v16.14.2  
  - yarn 1.22.18  
  - npm v8.5.0 
  
# Sobre o Projeto
  
  - O Projeto foi desenvolvido utilizando o TypeScript que busca melhorar a busca de erros e bugs dentro do código, além de melhorar a consistência e escabilidade do mesmo.
  -  Foi utilizado uma API externa que simula um endpoint de autenticação e uma listagem de fotos de animais.
  
  
# Sobre a API Dog Breed

URL da API: [`https://dogbreed-api.q9.com.br`](https://dogbreed-api.q9.com.br)

Todas as requisições devem ser feitas com a header Content-Type: application/json.
As respostas são codificadas em JSON.

### POST /register

#### Cadastro/Login de usuário

```bash
POST /register
```

```bash
curl "https://dogbreed-api.q9.com.br/register" \
-H "Content-Type: application/json" \
-d '{ "email": "name@domain.com" }'
```

### GET /list

#### Listas de cachorros

```bash
GET /list
```

```bash
curl "https://dogbreed-api.q9.com.br/list" \
-H "Authorization: $TOKEN" \
-H "Content-Type: application/json"
```

##### Querystring

##### ?breed

**Default**: `chihuahua`<br/>
**Type**: `string`<br/>
**Options**: `chihuahua`, `husky`, `pug`, `labrador`

