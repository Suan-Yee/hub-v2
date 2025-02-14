import mongoose from "mongoose";
import { MONGO_URI } from '../config/env.js';

if(!MONGO_URI) {
    throw new Error('Please define the MONGODB_URI environment variable')
}


const connectToDataBase = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log(`Connected to database.`);

    } catch (error) {
        console.log('Error connecting to database: ',error);
        
        process.exit(1);
    }
}

export default connectToDataBase;