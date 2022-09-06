const express=require('express');
const app =express();
const Todo = require('./models/todo');

app.use(express.json());


app.get('/show',(req,resp)=>{
    resp.send('hello')
})

app.post('/detail',async(req,res)=>{
    let data=new Todo(req.body);
    let result=await data.save();
    console.log(result)
    res.send(result)
})

app.listen(4000)