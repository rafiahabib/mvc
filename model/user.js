const mongoose=require('mongoose')
const {Schema}=require('mongoose')
const UserSchema=new Schema({
    
    email:String,
    name:String,
   gender:Boolean
})
const User = mongoose.model('User',UserSchema)
module.exports = User;