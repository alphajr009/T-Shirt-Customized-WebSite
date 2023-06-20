import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// Serve the client-side code with the injected API key
app.get('/', (req, res) => {
    // Retrieve the API key from your environment or configuration
    const apiKey = process.env.OPENAI_API_KEY;

    // Render your HTML template or serve the JavaScript file with the injected API key
    res.render('index', { apiKey });
});

app.use("/api/v1/dalle", dalleRoutes);

app.listen(8080, () => console.log('Server has started on port 8080'));
