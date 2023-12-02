var express = require("express");
const res = require("express/lib/response");
var app = express();
const port = 3000


function calsum(counter){
    var sum=0;
    for(var i=0;i<counter;i++){
        sum = sum+i;
    }
    return sum 
}


function handleFirstRequest(req, res){
    var counter = req.query.counter;   //to pass the input as QeuryParam(localhost:3000/route?counter=1000)
    var caltdsum = calsum(counter);
    console.log(caltdsum)
    var answer = "the sum is " + caltdsum;
    res.send(answer);
}
app.get('/handlesum', handleFirstRequest)

function started(){
    console.log(`Examle app listening on port ${port}`)    
}
app.listen(port,started)     



