let db = require("./../services/var")

let emp = require('../services/schema');

let admin = require('../services/login');



let save = async (req, res) => {



    let date = new Date();

    let mode = date.toISOString().slice(0, 10).replace('-', '').replace('-', '')

    
    let num = await emp.find().sort({ _id: -1 })
   

    if (num.length == 0) {

        req.body.Employeeid = (mode) + 0 + 1;
       
        console.log(req.body.Employeeid);

    }

    else if (mode == num[0]['Employeeid'].slice(0, 8)) {


        req.body.Employeeid = parseInt(num[0]['Employeeid']) + parseInt(1)
        
        console.log(req.body.Employeeid);
    }
    else {
        req.body.Employeeid = mode + 0 + 1;
        
        console.log(req.body.Employeeid)

    }


    let save1 = await db.saveuserdetails(req.body)

    if (save1 == true) {

        res.send({
            "code": 200,
            "status": "Success",
            "Message": "Employee Added Sucessfully", save1

        })
    } else {

        res.send({
            "code": 400,
            "status": "Failure",
            "Message": "Something Went Wrong",

        })

    }

}
let updateaddr = async (req, res) => {
    let match = await emp.aggregate([{$match:{$and:[{MobileNumber:req.body.MobileNumber},{Aadhaar:req.body.Aadhaar}]}}])
    //req.body.Employeeid = match[0]["Employeeid"]
   if(match.length==0)
   {
       res.send(
           {
               "code" : 400,
               "message" :"employee not found"

           }
           )}
           else
           {
              req.body.Employeeid =match[0]["Employeeid"]
              console.log(req.body.Employeeid)
              let date = new Date();
               req.body.Fupdatedon = date.toISOString().slice(0,10)
              console.log( req.body.Fupdatedon)        
           }
           addrdata = await db.Addrupdate(req.body);

    if (addrdata == true) {
        res.send({
            "code": 200,
            "message": "Success",
            "status": addrdata
        })
    }
    else {
        res.send({
            "code": 400,
            "message": "Success",
            "status": "failed"
        })
    }
}
let bankdetails = async (req, res) => {
    let match = await emp.aggregate([{$match:{$or:[{MobileNumber:req.body.MobileNumber},{Aadhaar:req.body.Aadhaar}]}}])
    //req.body.Employeeid = match[0]["Employeeid"]
   if(match.length==0)
   {
       res.send(
           {
               "code" : 400,
               "message" :"employee not found"

           }
           )}
           else
           {
              req.body.Employeeid =match[0]["Employeeid"]
              console.log(req.body.Employeeid)
              let date = new Date();
               req.body.Bupdatedon = date.toISOString().slice(0,10)
              console.log( req.body.Bupdatedon)        
           }
           empdata = await db.UpdateBankDetails(req.body);

    if (empdata == true) {
        res.send({
            "code": 200,
            "message": "Success",
            "status": empdata
        })
    }
    else {
        res.send({
            "code": 400,
            "message": "Success",
            "status": "failed"
        })
    }
}
let empdetails = async (req, res) => {
    let match = await emp.aggregate([{$match:{$or:[{MobileNumber:req.body.MobileNumber},{Aadhaar:req.body.Aadhaar}]}}])
    //req.body.Employeeid = match[0]["Employeeid"]
   if(match.length==0)
   {
       res.send(
           {
               "code" : 400,
               "message" :"employee not found"

           }
           )}
           else
           {
              req.body.Employeeid =match[0]["Employeeid"]
              console.log(req.body.Employeeid)
              let date = new Date();
               req.body.Fupdatedon = date.toISOString().slice(0,10)
              console.log( req.body.Fupdatedon)        
           }
           empdata = await db.updateempdetails(req.body);

    if (empdata == true) {
        res.send({
            "code": 200,
            "message": "Success",
            "status": empdata
        })
    }
    else {
        res.send({
            "code": 400,
            "message": "Success",
            "status": "failed"
        })
    }
}
let FamilyDetails = async (req, res) => {
    let match = await emp.aggregate([{$match:{$and:[{MobileNumber:req.body.MobileNumber},{Aadhaar:req.body.Aadhaar},{PAN:req.body.PAN}]}}])
    //req.body.Employeeid = match[0]["Employeeid"]
   if(match.length==0)
   {
       res.send(
           {
               "code" : 400,
               "message" :"employee not found"

           }
           )}
           else
           {
              req.body.Employeeid =match[0]["Employeeid"]
              console.log(req.body.Employeeid)
              let date = new Date();
               req.body.Fupdatedon = date.toISOString().slice(0,10)
              console.log( req.body.Fupdatedon)
           
            
           }
           familyData = await db.Familyupdate(req.body);

    if (familyData == true) {
        res.send({
            "code": 200,
            "message": "Success",
            "status": familyData
        })
    }
    else {
        res.send({
            "code": 400,
            "message": "Success",
            "status": "failed"
        })
    }
}

let ProfessionalDetails = async (req, res) => {
    updateprof = await db.professional(req.body);
    try {
        if (updateprof == true) {
            res.send({
                "code": 200,
                "message": "Success", updateprof
            })
        }
        else {
            res.send({
                "code": 400,
                "message": "something wrong"
            })

        }

    } catch (error) {

    }

}
const SalaryDetails = async (req, res) => {
    try {
    let match = await emp.aggregate([{$match:{$and:[{MobileNumber:req.body.MobileNumber},{Aadhaar:req.body.Aadhaar},{PAN:req.body.PAN}]}}])
    
    if(match.length==0)
    {
        res.send(
            {
                "code" : 400,
                "message" :"employee not found"
 
            }
            )}
            else
            {
               req.body.Employeeid =match[0]["Employeeid"]
               console.log(req.body.Employeeid)
               let date = new Date();
                req.body.Supdatedon = date.toISOString().slice(0,10)
              console.log(req.body.Supdatedon)
              // let data=await db.UpdateSalaryDetails(req.body)
             
            }
  
        let data=await db.UpdateSalaryDetails(req.body)
        if(data==true){
            res.send({
                "Code":200,
                "Message":"Salary Details Updated Successfully!!"
            })
        }
        else{
            res.send({
                "Code":400,
                "Message":"Failed to Update"
            })
        }
    } catch(err) {
        res.send({ status: 400, msg: 'Some Thing Went Wrong!'}); 
    }
};
const EducationDetails = async (req, res) => {
    try {
        let match = await emp.aggregate([{$match:{$and:[{MobileNumber:req.body.MobileNumber},{Aadhaar:req.body.Aadhaar},{PAN:req.body.PAN}]}}])
    
    if(match.length==0)
    {
        res.send(
            {
                "code" : 400,
                "message" :"employee not found"
 
            }
            )}
            else
            {
               req.body.Employeeid =match[0]["Employeeid"]
               console.log(req.body.Employeeid)
               let date = new Date();
                req.body.Supdatedon = date.toISOString().slice(0,10)
              console.log(req.body.Supdatedon)
              // let data=await db.UpdateSalaryDetails(req.body)
             
            }
        let data=await db.UpdateEductionDetails(req.body)
        if(data==true){
            res.send({
                "Code":200,
                "Message":"Education Details Updated Successfully!!"
            })
        }
        else{
            res.send({
                "Code":400,
                "Message":"Failed to Update"
            })
        }
    } catch(err) {
        res.send({ status: 400, msg: 'Some Thing Went Wrong!'}); 
    }
};
const Payroll = async (req, res) => {
    try {
        let match = await emp.aggregate([{$match:{$and:[{MobileNumber:req.body.MobileNumber},{Aadhaar:req.body.Aadhaar},{PAN:req.body.PAN}]}}])
    if(match.length==0)
    {
        res.send(
            {
                "code" : 400,
                "message" :"employee not found"
            }
            )}
            else
            {
               req.body.Employeeid =match[0]["Employeeid"] 
               console.log(req.body.Employeeid)
               let date = new Date();
                req.body.Payrollupdatedon = date.toISOString().slice(0,10)
              console.log(req.body.Payrollupdatedon)
              // let data=await db.UpdateSalaryDetails(req.body)            
            }
        let data=await db.UpdatePayrollDetails(req.body)
        if(data==true){
            res.send({
                "Code":200,
                "Message":"Payroll Details Updated Successfully!!"
            })
        }
        else{
            res.send({
                "Code":400,
                "Message":"Failed to Update"
            })
        }
    } catch(err) {
        res.send({ status: 400, msg: 'Some Thing Went Wrong!'}); 
    }
};

let emplogin = async (req, res) => {
let data = await admin.adminlogin(req.body);
console.log(req.body)
if(data==false){
    
    res.send({
        "code":400  ,
        "message": "login failed",
        "Token generation" : "failed"
     })
    }
else{
       res.send({
           
           "code" : 200,
           "message" : "login success",
           "token" : data
       })
   }
}
let getalluser = async (req, res) => {
    chekuser = await emp.find()
    console.log(chekuser);
    if (chekuser == 0) {
        res.send({
            "code": 400,
            "message": "No data found"
        })

    } else {
        res.send({
            "code": 200,
            "message": "sucess",
            chekuser
        })

    }
}
//let trail = async(req,res)=>{
    //let gowtham=await emp.aggregate([{$match:{$and:[{MobileNumber:req.body.MobileNumber},{Aadhaar:req.body.Aadhaar},{PAN:req.body.PAN}]}}])
    //console.log(gowtham[0]['FirstName'])
    //let sathish = await emp.find()
    //console.log(sathish[1]['FirstName'])
    //}
    
   module.exports = {
    save,
    FamilyDetails,
    ProfessionalDetails,
    SalaryDetails,
    EducationDetails,
    emplogin  ,
    Payroll,
    empdetails,
    updateaddr,
    bankdetails,
    getalluser
    //trail

}   