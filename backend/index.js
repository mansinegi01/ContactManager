const express = require('express')
const app = express();


const port = process.env.PORT || 8000;

app.use(express.json())

app.get('/api/transaction',(req,res)=>{
    res.json(req.body)
})

app.listen(port)