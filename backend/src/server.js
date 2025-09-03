import express from 'express';
import  {ENV}  from './config/env.js';

const { MONGO_URI, PORT } = ENV;
const app = express();


app.get('/', (req, res) => res.status(200).send('<h1>Hello <br> World</h1>'))
console.log("mongo uri:", MONGO_URI);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));