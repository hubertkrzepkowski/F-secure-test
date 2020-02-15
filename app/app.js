const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT;
const host = '0.0.0.0';

var jsonParser = bodyParser.json()

app.get('/random',(req,res)=>{
var random = Math.floor(Math.random()*(100 - 0) + 0);
res.statusMessage ="ok";
res.json({status :"ok", number:random.toString()});
});

app.post('/echo',jsonParser,(req,res)=>{
   
    res.json({status :"ok",msg :req.body});    
});

app.use((err, req, res, next) => {
    if(err.status === 400)
    return res.json({status :"error"});

    return next(err);  
    
});

app.listen(port, host);
console.log("Running on http://" + host + ":" + port);