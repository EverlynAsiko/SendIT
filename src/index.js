'use strict';

const express = require('express')
const helmet = require('helmet')
require('dotenv').config();
const morgan = require('morgan');
const { errors } = require('celebrate');

const app = express()
app.use(helmet())
const port = 3000

app.use(morgan('dev'));

app.get('/', (req, res) => res.send('Hello World!'))

app.use(errors())

app.listen(port, () => console.log(`Server listening on port ${port}!`))

