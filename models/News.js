const mongoose = require('mongoose');

// Define the schema for your posts
const newstSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  // I  can add more fields like author, date, etc. as needed
},{
  timestamps:true
});


// Creating  a model based on the schema
const News = mongoose.model('Post', newstSchema);

module.exports = News;
