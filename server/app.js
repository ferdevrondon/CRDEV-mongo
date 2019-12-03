const express = require('express');
const app = express();
require('dotenv').config();
const mongoDB = require('mongoose');



mongoDB.connect(process.env.MongoUrl, {useNewUrlParser: true} )

app.get('/', (req,res)=>{
    res.send('<h1>hola</h1>')
})

app.listen(process.env.PORT, ()=> {
    console.log(`el servidor esta corriendo en puerto ${process.env.PORT} `)
})