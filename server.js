const express  = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const backend = require('./backend/index');

dotenv.config();

const databaseUrl = process.env.DATABASE_URL;
const port = process.env.PORT;
const documentationUrl = 'https://documenter.getpostman.com/view/2479524/SzRxV9xD?version=latest'

const app = express();
const router = express.Router();

mongoose.connect(databaseUrl,
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
.then(() => console.log('Now connected to MongoDB!'))
.catch(err => console.error('Something went wrong', err));

// Apps documentation
app.get("/", (req, res) => {
    res.redirect(documentationUrl);
});

backend(router);

app.use(bodyParser.json())
app.use('/api', router);
app.listen(port, () => console.log(`shoppu is running on port :: ${port}`))
