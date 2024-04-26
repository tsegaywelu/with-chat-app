//this model is to password,name and email of users
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{timestamps:true})

const User = mongoose.model('allUsers', userSchema);
module.exports = User