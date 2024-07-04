const express = require('express'); // Import express
const dotenv = require('dotenv'); 
const morgan = require('morgan'); 
const mongoose = require('mongoose');
const cors = require('cors'); 

const router = require('./router'); 

dotenv.config();

const app = express();

app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS
app.use(morgan('tiny')); // Log HTTP requests

app.use(router) // Use the router


mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("starting on port 8080")
    app.listen(8080)
})