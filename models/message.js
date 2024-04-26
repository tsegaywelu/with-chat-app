const mymongoose = require('mongoose');
const userSchema = new mymongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
    
},{timestamps:true})

const Messages = mymongoose.model('messages from users', userSchema);
module.exports = Messages