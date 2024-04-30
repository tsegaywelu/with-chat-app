 const e = require('express');
const mymongoose = require('mongoose');
const userSchema = new mymongoose.Schema({
    sendername: {
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
    },
    usertype: {
        type: String,
        required: true,
        enum: ['user', 'admin']

    }
    
},{timestamps:true})

const Messages = mymongoose.model('messages from users', userSchema);
module.exports = Messages 



// const Joi = require('joi');
// const mongoose = require('mongoose');

// // Define Joi schema for validation
// const userSchemaJoi = Joi.object({
//     sendername: Joi.string().required(),
//     email: Joi.string().email().required(),
//     message: Joi.string().required(),
//     usertype: Joi.string().valid('user', 'admin').required()
// });

// // Mongoose schema definition
// const userSchema = new mongoose.Schema({
//     sendername: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     message: {
//         type: String,
//         required: true
//     },
//     usertype: {
//         type: String,
//         required: true,
//         enum: ['user', 'admin']
//     }
    
// },{timestamps:true});

// // Validate input data against Joi schema
// userSchema.pre('save', async function(next) {
//     try {
//         await userSchemaJoi.validateAsync(this.toObject());
//         next();
//     } catch (error) {
//         next(error);
//     }
// });

// // Create Mongoose model
// const Messages = mongoose.model('messages from users', userSchema);

// module.exports = Messages;
