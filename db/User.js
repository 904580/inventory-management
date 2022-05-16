const mongoose = require ('mongoose');
const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
     phonenumber: Number,
    password:{
        type: String,
        required:true,
    },
    confirmpassword:{
        type: String,
        required:true
        
    }
});

module.exports = mongoose.model("Users", UserSchema);