const express = require('express')
const app = express();
const {connectDB} = require('./connectDB')
const routes = require('./routes/urlRoutes')
const cors = require('cors')
const cookieParser = require("cookie-parser");
const {authenticatedUser} = require('./middlewares/auth')
const serviceRoutes = require('./routes/servicesRoutes')
const http = require("http")
const {Server} = require("socket.io")

const server = http.createServer(app)
const io = new Server(server,{
    cors : {
        origin : "http://localhost:5173",
        methods : "GET, POST",
        credentials : true
    }
})
io.on("connection", (socket) => {

    socket.on("send-message", (msg) => {

        const chatModel = require("./models/chat");
        chatModel.create(msg);

        // Broadcast message to other clients
        socket.broadcast.emit("receive-message", msg);
    });

    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
    });
});



const port = process.env.PORT || 8000;


//Cors
let corsOption = {
    origin : "http://localhost:5173",
    methods : "GET, POST, PUT, PATCH, DELETE",
    credentials : true
}

//ConnectDB
connectDB("mongodb://127.0.0.1:27017/userData")

//middlewares
app.use(cookieParser());
app.use(cors(corsOption))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use("/api",routes)
app.use("/services",authenticatedUser,serviceRoutes)


//chat routes
// router.get("/chat/:id", authenticatedUser, async (req, res) => {
//     try {
//         const messages = await chat.find(); // filter by contact ID if needed
//         res.status(200).json({ data: messages });
//     } catch (error) {
//         res.status(500).json({ message: "Failed to fetch chat" });
//     }
// });



//listen
server.listen(port,()=>{
    console.log(`server started`);
    
})