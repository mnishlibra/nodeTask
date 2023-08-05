const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000;
const mongoDb = require('./db/db');
const dataRoute = require('./routes/data');

app.use('/',dataRoute);

app.listen(port, () => {
    console.log(`server is running on port ${port}.`)
})