const imp = require('../../script')
const express = require('express')  
const app = express()

app.use(function(req,res,next){
    console.log('aikHan A dakha Nohoya cha')
    next();
})

app.get('/',function(req,res){
    res.send('hello');
})

app.get('/vdo',function(req,res){
    res.send('hear is your video');
})

app.listen(3000)
