const express  = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const backend = require('./backend/index');

dotenv.config();

const databaseUrl = process.env.DATABASE_URL;
const port = process.env.PORT;

const app = express();
const router = express.Router();

mongoose.connect(databaseUrl,
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
.then(() => console.log('Now connected to MongoDB!'))
.catch(err => console.error('Something went wrong', err));

backend(router);

app.use(bodyParser.json())
app.use('/api', router);
app.listen(port, () => console.log(`shoppu is running on port :: ${port}`))
