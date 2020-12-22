const express = require('express');
const app = express();
var cors = require("cors");
const bodyParser = require("body-parser");
const { Pool, Client } = require('pg');

app.use(bodyParser.json());


const pool = new Pool({
    user: '',
    host: 'localhost',
    database: 'incloud',
    password: '',
    port: 5432,
  })


app.use(cors());


app.post('/setdesc', (req, res) => {
    const text = 'INSERT INTO termin (time, descript) VALUES ($1, $2) RETURNING *';
    const values = [req.body.time, req.body.descript];
    pool
        .query(text, values)
        .then(res => {
            console.log(res.rows[0])
        })
        .catch(e => console.error(e.stack))
    const response = {success: true};
    res.send(JSON.stringify(response));
})



app.listen(process.env.PORT || 8001, () => console.log("Its run"));
