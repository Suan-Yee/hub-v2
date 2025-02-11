import express from 'express';
import { PORT } from './config/env.js';

const app = express();


app.listen(PORT, async () => {
    console.log(`Running on PORT-${PORT}`)
})