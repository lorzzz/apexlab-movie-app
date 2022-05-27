const express = require("express");
const app = express();
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const movies = require("./routes/movies");

const corsOptions = { origin: process.env.FRONTEND_URL, };

app.use(cors(corsOptions));
app.use(express.json()); 
app.use('/api/movies', movies);

app.use(errorHandler);

module.exports = app;


