const express  = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

// env variables
const databaseUrl = process.env.DATABASE_URL;
const port = process.env.PORT

// app intance
const app = express()
const router = express.Router()

// instatiate DB
mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Now connected to MongoDB!'))
.catch(err => console.error('Something went wrong', err));

// app methods
app.use(bodyParser.json())
app.listen(port, () => console.log(`shoppu is running on port :: ${port}`))
