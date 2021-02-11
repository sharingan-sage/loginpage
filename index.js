const express=require('express');
const Datastore= require('nedb');
const app=express();
app.listen(3000 ,()=>console.log('istening...'));
app.use(express.static('project1'));
const bodyParser=require("body-parser");
app.use(bodyParser.json());
const database=new Datastore('database.db');
database.loadDatabase();

app.post('/api' ,(request ,response)=>{
    console.log("got the request!");
    const newUser={
        mail:request.body.id1,
        passwd:request.body.id2

    };
    response.status(201).jason(newUser);
    database.insert(newUser);
});