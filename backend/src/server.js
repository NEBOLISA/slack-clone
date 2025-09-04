import express from 'express';
import  {ENV}  from './config/env.js';
import { connectDB } from './config/db.js';

const { MONGO_URI, PORT } = ENV;
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.get('/', (req, res) => res.status(200).send('<h1>Hello <br> World</h1>'))
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB()
});