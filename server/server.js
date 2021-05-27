const express = require('express');
const connectDB = require('./database/db');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT;
connectDB();
app.listen(port,()=>{
    console.log(`Server is running on port: http://localhost:${port}`);
})