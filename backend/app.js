const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routesjs');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use(routes);

// app.use((req, res, next) => {
//     res.setHeader("Content-Type", "text/html");
//     next();
// })

app.use((req, res, next) => {
    res.send("Hello World!");
})


app.listen(3000);