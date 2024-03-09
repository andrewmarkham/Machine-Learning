# ML Search Demos
A series of demo's showing how you can build advanced search functionality.

 - Semantic Search
 - Visual Search (WIP)

Associated Blog [Read More](https://jhoose.co.uk/2024/03/09/building-your-own-semantic-search-implementation/)

## Technology Used
 - Embeddings created using a [Hugging Face](https://huggingface.co/) model and supporting javascript library.

 - The Vector database is Postgres with psvector extension, this is running in a docker container.

 - Node and Next.js for the  demo api's and website 

## Getting started

- Navigate to the `.\postgres\` folder and run the command `docker-compose up -d` this will start the databae and initialise it.

- Signup for a [Hugging Face](https://huggingface.co/) account, and get an API key.

- Navigate to the `.\search-server\` folder and create a `.env` file.  Add the values shown below.

```
HUGGINGFACE="..."
PG_HOST="localhost"
PG_PORT="5432"
PG_DATABASE="ArticlesDB"
PG_USERNAME="testuser" 
PG_PASSWORD="testpwd"
```

- Start the server 
  - Navigate to `.\search-server\`
  - `npm run dev`

- Start the app 
  - Navigate to `.\search-app\`
  - `npm run dev`
  - You can now open a browser and access the demo application `http://localhost:3001/`


### Postman Collection and Test Data
There is some test data avalaible in the repo, along with a Postman collection that can be used to populate the database.  This is located in the `.\postman` directory.


## Useful Links
There is a wealth of knowledge avaliable on the internet to help further your understanding of this area.

https://medium.com/@johannes.ocean/setting-up-a-postgres-database-with-the-pgvector-extension-10ab7ff212cc
https://www.youtube.com/watch?v=QdDoFfkVkcw
