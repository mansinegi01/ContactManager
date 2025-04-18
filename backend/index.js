const express = require('express')
const app = express();
const {connectDB} = require('./connectDB')
const routes = require('./routes/urlRoutes')

const port = process.env.PORT || 8000;

//ConnectDB
connectDB("mongodb://127.0.0.1:27017/userData")

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use("/login",)



//listen
app.listen(port)