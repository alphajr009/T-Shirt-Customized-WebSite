import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {

    const apiKey = process.env.OPENAI_API_KEY;


    res.render('index', { apiKey });
});

app.use("/api/v1/dalle", dalleRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(port, () => console.log('Server has started on port 8080'));
