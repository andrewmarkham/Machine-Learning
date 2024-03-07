import pkg from 'pg';
const { Pool } = pkg;

//export default function ArticlesRepository(){

    // Connect to PostgreSQL and add a record to a table
 
    function getPool() {
        // Load environment variables from .env file
        const { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env;

        // Create a PostgreSQL connection pool
        return new Pool({
            host: PG_HOST,
            port: parseInt(PG_PORT),
            database: PG_DATABASE,
            user: PG_USERNAME,
            password: PG_PASSWORD
        });
    }

    export default async function addRecordToTable(text, embeddings:[]) {

        // Get a PostgreSQL connection pool
        var pool = getPool();

        const client = await pool.connect();
        var s = JSON.stringify(embeddings);
        try {
            await client.query('BEGIN');
            await client.query('INSERT INTO Articles (text, embedding) VALUES ($1, $2)', [text, s]);
            //await client.query('INSERT INTO Articles (text) VALUES ($1)', [text]);
            await client.query('COMMIT');
            console.log('Record added successfully!');
        } catch (error) {
            await client.query('ROLLBACK');
            console.error('Error adding record:', error);
        } finally {
            client.release();
        }
    };


    export async function query(embeddings:[]) {
        // Get a PostgreSQL connection pool
        var pool = getPool();

        const client = await pool.connect();
        var s = JSON.stringify(embeddings);
        try {
            await client.query('BEGIN');
            //const res = await client.query('SELECT * FROM Articles WHERE embedding = $1', [s]);
            const res = await client.query('SELECT text,  1 - (embedding <=> $1) AS cosine_similarity FROM Articles ORDER BY cosine_similarity desc LIMIT 5', [s]);

            await client.query('COMMIT');
            console.log('Query executed successfully!');
            return res;
        } catch (error) {
            await client.query('ROLLBACK');
            console.error('Error executing query:', error);
        } finally {
            client.release();
        }
    }
//}