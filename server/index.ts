'use strict';
import express from "express";
import {router} from './router';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

const app = express();

dotenv.config({ path: './.env' });

app.use(cors());
app.use(express.json());
app.use(express.static('staticFiles'))
app.use(router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
