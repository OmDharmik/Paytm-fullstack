const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://omdharmik:xcmr2eEQPPLFDeqK@exploration.q9i9q5x.mongodb.net/Paytm")
.then(()=>{
    console.log("Database connected")
})

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
})

const User = mongoose.model('User', userSchema);

module.exports ={
    User
}
