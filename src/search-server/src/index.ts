
import dotenv from 'dotenv';
import { HfInference } from '@huggingface/inference';

import express, { Request, Response } from 'express';
import addRecordToTable, {query} from './db/articlesrepository.js';
import cors from 'cors';

// Load environment variables from .env file
dotenv.config();

// Access environment variables
const { HUGGINGFACE } = process.env;

const app = express();
app.use(express.json());
app.use(cors())

app.post('/', async (req: Request, res: Response) => {
    const { text, id } = req.body;
    
    // Handle the received data
    console.log(`Received text: ${text}`);
    console.log(`Received id: ${id}`);

    const hfInference = new HfInference(HUGGINGFACE);

    const embeddings = await hfInference.featureExtraction({
        model: "intfloat/e5-small-v2",
        inputs: `passage: ${text}` // passage with query: see https://huggingface.co/intfloat/e5-small-v2
    }) as [];

    await addRecordToTable(text, embeddings);

    // Send a response
    res.status(200).json({ message: 'Data received successfully' });
});

app.get('/search', async (req: Request, res: Response) => {
    const { text } = req.query;
    // Handle the received data
    console.log(`Received text: ${text}`);

    if (typeof text === "string") {
        const hfInference = new HfInference(HUGGINGFACE);

        const embeddings = await hfInference.featureExtraction({
            model: "intfloat/e5-small-v2",
            inputs: `query: ${text}`   // prefix with query: see https://huggingface.co/intfloat/e5-small-v2
        }) as [];

        var results = await query(embeddings);

        //console.log(results.rows);
        // Send a response
        res.status(200).json(results.rows);
    }
    else {
        console.log("text is not a string");
        res.status(500).json({ message: 'text is not a string' });
    }

});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});