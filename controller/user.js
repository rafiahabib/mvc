const User=require('../model/user')

const register = async(req,res)=>{

   try{ const data = req.body
    const user =await User.create(data)
    res.json({"message":"user register successfully",user})
    }catch(err){
        console.error(err)
        res.status(500).json({"message":"internal server error"})
    }
}

const getSingleuser = async(req,res)=>{
    try{
    const id = req.params.id
    const user = await User.findById(id)
    res.json({"message":"book read successfully",user})}
    catch(err){
        console.error(err)
        res.status(500).json({"message":"internal server error"})
    }
    }

const updateuser=async(req,res)=>{
    try{
    const id=req.params.id
    const object=req.body
    const user= await User.findByIdAndUpdate(id, object,{new:true});
    res.json({"message":"update succesfully",user})}
    catch(err){
        console.error(err)
        res.status(500).json({"message":"internal server error"})
    }
}
const deleteuser=async(req,res)=>{
    try{
    const id=req.params.id
    const user= await User.findByIdAndDelete(id)
    console.log("deleted")
    res.json({"message":"delete successfully",user})}
    catch(err){
        console.error(err)
        res.status(500).json({"message":"internal server error"})
    }
}
module.exports={
    register,
    getSingleuser,
    updateuser,
    deleteuser
}