var express = require("express");
var app = express();
const port = 3000;

function calsum(counter) {
    var sum = 0;
    for (var i = 0; i < counter; i++) {
        sum = sum + i;
    }
    return sum;
}

function handleFirstRequest(req, res) {
    var counter = req.query.counter; //to pass the input as QueryParam(localhost:3000/handlesum?counter=1000)
    var caltdsum = calsum(counter);
    console.log(caltdsum);
    var answer = "the sum is " + caltdsum;
    res.send(answer);
}

function handlepost(req, res) {
    res.send("Hello, World!");
}

function handlePut(req, res) {
    res.send("This is a PUT request!");
}

function handleDelete(req, res) {
    res.send("This is a DELETE request!");
}

app.get('/handlesum', handleFirstRequest);
app.post('/handlepost', handlepost);
app.put('/handleput', handlePut);
app.delete('/handledelete', handleDelete);

function started() {
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);
