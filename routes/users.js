const mongoose = require('mongoose');
const plm=require("passport-local-mongoose");

// Connect to the database
mongoose.connect("mongodb://127.0.0.1:27017/pinterestdb");



// Define User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
   
  },
  password: {
    type: String
  },
  posts: [{
    
    type:mongoose.Schema.Types.ObjectId,
    ref:'Post'
  }
  ],
  dp: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullname: {
    type: String
  }
});

userSchema.plugin(plm);

module.exports= mongoose.model('User', userSchema);


