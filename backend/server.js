const express = require("express");
const {chats} = require("./Data/data");
const dotenv = require("dotenv");

const app = express();


// Our very first express js API
app.get('/', (req,res)=>{
    res.send("API is running Successfully");
});

app.get('/api/chat', (req,res) =>{
    res.send(chats);
});
app.get('/api/chat/:id', (req,res)=>{
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
});

const PORT = process.env.PORT || 4000;
app.listen(5000, console.log(`server is running at the port number ${PORT}, http://localhost:5000/`));

