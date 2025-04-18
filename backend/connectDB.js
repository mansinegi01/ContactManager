const mongoose = require('mongoose')

function connectDB(url){
    mongoose.connect(url)
    .then(()=>{
        console.log(`mongoDB connected!`);
    })
    .catch((err)=>{
        console.log(`mongoDB not connected! : error occured : ${err}`);
    })

}

module.exports = {
    connectDB
}