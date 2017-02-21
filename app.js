const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

//Here is where I serve up the first page
app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, './components/index.html'));
});

//error handling
app.use(function (err, req, res, next) {
    console.error(err, err.stack);
    res.status(err.status || 500).send(err);
});

//run the server on port 3001
app.listen(3001, function () {
    console.log('Server is listening on port 3001');
});


module.exports = app;
