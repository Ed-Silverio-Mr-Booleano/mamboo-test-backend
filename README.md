
# Edmilson Silvério

# API REST usando EXPRESS | MongoDB | Clean Architecture | TDD | Conventional Commit | Typescript


#### mamboo-test-backend
This is a repo for apply a mid-backend position on Mamboo

Este é um desafio de construção de uma API REST.


## Instalar a app

    npm install or yarn

## Fazer o build

    npm build or yarn build
    
## Utilizar a API remotamente
    https://mamboo-test-backend.herokuapp.com/tasks
    
## Configurar a base de dados
    
    criar a DB `TASKS_DB` e a COLLECTION `tasks` num servidor MongoDB 
    
    Mudar os dados de acesso a base de dados no arquivo .env, tais como: URI, COLLECTION e PORT
    
## Executar a app
    npm start or yarn start
    

## Build app

    yarn buid or npm build
    yarn start

# REST API

A REST API deste aplicativo é descrita abaixo.

## Get: Listar todas as tarefas

### Request

`GET /tasks`

    'application/json' http://localhost:PORT/tasks | https://mamboo-test-backend.herokuapp.com/tasks

### Response

    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 41
    ETag: W/"29-yg9ElDIFi3l2DpUh535KUpXmtlg"
    Date: Thu, 23 Dec 2021 10:10:39 GMT
    Connection: keep-alive

   
	[
	  {
	    "id": "62cd43e94e246398545c0c3a",
	    "name": "Mamboo Api 1.23.1",
	    "startDate": "02-11-2024",
	    "finishDate": "03-12-2025",
	    "status": "done"
	  },
	  {
	    "id": "62cd69ac12bb2ff10e0770c8",
	    "name": "Mamboo Api New 1.0.1",
	    "startDate": "02-11-2024",
	    "finishDate": "03-12-2025",
	    "status": "to do"
	  }
	]

## Criar uma nova tarefa

### Request

`POST /tasks/`

    'application/json' http://localhost:PORT/tasks | https://mamboo-test-backend.herokuapp.com/tasks
    
    {
      "id": "62cc9cd8bc7836bbcf89b909",
      "name": "Mamboo Api New 1.0.1",
      "startDate": "02-11-2024",
      "finishDate": "03-12-2025",
      "status": "to do"
    }

### Response

    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 41
    ETag: W/"29-WLapzflntobtY4yW3SAOfZgk+8Q"
    Date: Thu, 23 Dec 2021 12:29:49 GMT
    Connection: keep-alive

   {
     "message": "Created"
   }
## Actualizar uma tarefa

### Request

`UPDATE /tasks/`

    'application/json' http://localhost:PORT/tasks | https://mamboo-test-backend.herokuapp.com/tasks
    
    {
      "id": "62cc9cd8bc7836bbcf89b909",
      "name": "Mamboo Api New 1.0.1",
      "startDate": "02-11-2024",
      "finishDate": "03-12-2025",
      "status": "to do"
    }

### Response

    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 41
    ETag: W/"29-WLapzflntobtY4yW3SAOfZgk+8Q"
    Date: Thu, 23 Dec 2021 12:29:49 GMT
    Connection: keep-alive

   {
     "message": "Created"
   }
     
## Eliminar nova tarefa

### Request

`DELETE /tasks/`

    'application/json' http://localhost:PORT/tasks | https://mamboo-test-backend.herokuapp.com/tasks
    
    {
      "id": "62cc9cd8bc7836bbcf89b909",
      "name": "Mamboo Api New 1.0.1",
      "startDate": "02-11-2024",
      "finishDate": "03-12-2025",
      "status": "to do"
    }

### Response

    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 41
    ETag: W/"29-WLapzflntobtY4yW3SAOfZgk+8Q"
    Date: Thu, 23 Dec 2021 12:29:49 GMT
    Connection: keep-alive

   {
     "message": "Created"
   }
   
