'use strict';

const express = require('express');
const helmet = require('helmet');
require('dotenv').config();
const morgan = require('morgan');
const { errors } = require('celebrate');
const pg = require('pg');

const app = express();
app.use(helmet());
const port = 3000;

app.use(morgan('dev'));

const pool = new pg.Pool({
	user: 'sysadmin',
	host: '127.0.0.1',
	database: 'sendit',
	password: '123',
	port: '5432'
});

pool.query("SELECT NOW()", (err, res) => {
	console.log(err, res);
	pool.end();
});

app.get('/', (req, res) => res.send('Hello World!'));

app.use(errors());

app.listen(port, () => console.log(`Server listening on port ${port}!`));

