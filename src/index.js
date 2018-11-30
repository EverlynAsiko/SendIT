'use strict';

const express = require('express')
const helmet = require('helmet')
require('dotenv').config();

const app = express()
app.use(helmet())
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Server listening on port ${port}!`))