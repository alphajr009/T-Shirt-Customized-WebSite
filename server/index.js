import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));


app.get('/', (req, res) => {

    const apiKey = process.env.OPENAI_API_KEY;


    res.render('index', { apiKey });
});

app.use("/api/v1/dalle", dalleRoutes);

app.listen(8080, () => console.log('Server has started on port 8080'));
