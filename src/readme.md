# ML Search Demos
A series of demo's showing how you can build advanced search functionality.

 - Semantic Search
 - Visual Search (WIP)

##Technology Used
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

### Useful Links
There is a wealth of knowledge avaliable on the internet tohelp further your understanding of this area.

https://medium.com/@johannes.ocean/setting-up-a-postgres-database-with-the-pgvector-extension-10ab7ff212cc
https://www.youtube.com/watch?v=QdDoFfkVkcw
