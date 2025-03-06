import express from 'express';
import { PORT } from './config/env.js';
import connectToDataBase from './database/mongodb.js';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser())





app.listen(PORT, async () => {
    console.log(`Running on PORT-${PORT}`)

    await connectToDataBase();
})