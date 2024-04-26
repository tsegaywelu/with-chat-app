const Usersadd=require('../models/Users')


const jwt=require('jsonwebtoken')
console.log(jwt)
async function auth(req,res,next){//this is middlw ware 

const auth=req.headers.auth  //this auth variable is comming from front end 
if(!auth&& !(auth?.includes('bearer '))){
    return res.status(401).send("not authenticated")//this will stop the whole function execution

}

const Token=auth.split(' ')[1]
if(!Token){
    return res.status(401).send("not authenticated u")
}
const user=jwt.verify(Token,"goldenusersecurity");//this is used to incrept and decrept goldenusersecurity
if(!user){
    res.status(401).send("authentication with given token failed")
    return ;// equal with the above return but not recommennded 

}
const userdata=await Usersadd.findById(user.id)//
if(!userdata){
    res.status(401).send("authentication with given token failed")
    return ;
}
req.user=await userdata//  for the next route we are giving data 
console.log(req.user);
next();

}
module.exports=auth;