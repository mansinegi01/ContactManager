const express = require('express')
const app = express();
const {connectDB} = require('./connectDB')
const routes = require('./routes/urlRoutes')
const cors = require('cors')

const port = process.env.PORT || 8000;

//Cors
let corsOption = {
    origin : "http://localhost:5173",
    optionSuccessStatus : 200,
    methods : "GET, POST, PUT, PATCH, DELETE",
    credentials : true
}

//ConnectDB
connectDB("mongodb://127.0.0.1:27017/userData")

//middlewares
app.use(cors(corsOption))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use("/api",routes)




//listen
app.listen(port,()=>{
    console.log(`server started`);
    
})