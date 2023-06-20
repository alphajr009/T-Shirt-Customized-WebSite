import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }))
const port = process.env.PORT || 8080;

app.use("/api/v1/dalle", dalleRoutes);

if (process.env.NODE_ENV === "production") {
    // Set the static folder
    app.use(express.static("client/build"));

    // Serve the index.html file for all non-API routes
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.listen(port, () => console.log('Server has started on port 8080'))
