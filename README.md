
# Edmilson Silvério

# API REST usando EXPRESS | MongoDB | Clean Architecture | TDD | Conventional Commit | Typescript


#### mamboo-test-backend
This is a repo for apply a mid-backend position on Mamboo

Este é um desafio de construção de uma API REST.


## Instalar a app

    npm install or yarn

## Fazer o build

    npm build or yarn build
    
## Configurar a base de dados
    
    criar o arquivo `TASKS_DB` num servidor MongoDB 
    
    Mudar os dados de acesso a base de dados no arquivo .env, tais como: USERNAME, HOST, PASSWORD e PORT
    
## Executar a app
    npm start or yarn start
    

## Build app

    yarn buid or npm build
    yarn start

# REST API

A REST API deste aplicativo é descrita abaixo.

## Get: Lista um 

### Request

`GET /encripts/`

    'application/json' http://localhost:3000/encripts/12

### Response

    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 41
    ETag: W/"29-yg9ElDIFi3l2DpUh535KUpXmtlg"
    Date: Thu, 23 Dec 2021 10:10:39 GMT
    Connection: keep-alive

    {
      "id": 12,
      "encripted_name": "05f53a6ded9d"
    }

## Criar um novo registro

### Request

`POST /encripts/`

    'Accept: application/json' http://localhost:7000/thing
    
    {
	"name":"shazam"
    }

### Response

    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 41
    ETag: W/"29-WLapzflntobtY4yW3SAOfZgk+8Q"
    Date: Thu, 23 Dec 2021 12:29:49 GMT
    Connection: keep-alive

    {
	"id": 19,
	"encripted_name": "05f53a6ded9d"
    }
   

