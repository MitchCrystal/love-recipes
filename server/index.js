'use strict';

const express = require('express');
const router = require('./router');

const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
