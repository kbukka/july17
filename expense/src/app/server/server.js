const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', function(req,res){
    res.send('chaya');
})

app.post('/enroll', function(req,res){
    console.log(req.body);
})

app.listen(PORT, function(){
    console.log("running on port:", +PORT);
})
