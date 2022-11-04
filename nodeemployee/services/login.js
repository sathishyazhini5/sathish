
'use strict';
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    username : String,
    password: String
});

const model = mongoose.model('login', userSchema,'login');

const adminlogin = async (data) => {
    try{
        let match = await model.aggregate([{$match:{$and:[{"username":data.username},{"password":data.password}]}}])
        console.log(match.length)
      if (match.length!=0){
       let token = jwt.sign({data},'secret', { expiresIn: '24h' });
        console.log(token)
             return token;
            }
     else{ 
         
             return false;
            }
}
    catch{
    return false
         }
} 
   module.exports = {
    adminlogin
   };
