const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT;
const host = '0.0.0.0';
var jsonParser = bodyParser.json()

var mysql = require("mysql");
var connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return process.exit(3);
    }
    console.log("connected to DB");
});

app.get('/list', function (req, res) {
    var Query = 'select id, name from company';

    connection.query(Query, function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        res.send(results);
    });
});

app.get('/random', (req, res) => {
    var random = Math.floor(Math.random() * (100 - 0) + 0);
    res.json({ status: "ok", number: random.toString() });
});

app.post('/echo', jsonParser, (req, res) => {

    var Query = "INSERT INTO company(name) VALUES('F-secure')";
    connection.query(Query, function (error) {
        if (error) throw error;
    });
    res.json({ status: "ok", msg: req.body });
});

app.use((err, req, res, next) => {
    if (err.status === 400)
        return res.json({ status: "error" });

    return next(err);

});

app.listen(port, host);
console.log("(inside container)Running on http://" + host + ":" + port);