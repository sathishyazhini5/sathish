const employee = require('../services/schema');
const saveuserdetails = async (data) => {
    try {
        //console.log(data.MobileNumber)
        const chek = await employee.aggregate([{$match:{$and:[{EmailId:data.EmailId},{PAN:data.PAN},{PassportNumber:data.PassportNumber}]}}])
        console.log(chek.length)  
        if (chek.length == 0) {
           const users = new employee(data);
            const saveemp = await users.save();
           console.log(saveemp)
            return true;
        }
    } catch (err) {
        console.log(err)
        return false
    }
};
const updateempdetails=async (info)=>{
    try {
        console.log(info)
        const users = await employee.findOneAndUpdate(
           {"Employeeid" : info.Employeeid},
           { $set:
              {
                  "FirstName" : info.FirstName,
                  "LastName":info.LastName,
                  "DateofBirth" : info.DateofBirth,
                  "FathersName" : info.FathersName,
                  "Gender":info.Gender,
                  "Married": info.Married,
                "MobileNumber":info.MobileNumber,
                "EmailId":info.EmailId,
               "Aadhaarcard":info.Aadhaarcard,
                 "PAN":info.PAN,
            "PassportNumber":info.PassportNumber,    
            "Eupdatedon" : info.Eupdatedon     
               }},
            {multi:true});
        return true;
   } catch(err) {
       console.log(err)
       return false
   }
}
let Addrupdate = async (check) => {
    try {
        let users = await employee.findOneAndUpdate({ "Employeeid": check.Employeeid },
            {
                $set: {
                    "CurrentAddress.DoorNumber": check.CurrentAddress.DoorNumber,
                    "CurrentAddress.Street":check.CurrentAddress.Street ,
                    "CurrentAddress.Area": check.CurrentAddress.Area,
                    "CurrentAddress.City": check.CurrentAddress.City,
                    "CurrentAddress.State": check.CurrentAddress.State,
                    "CurrentAddress.Pincode": check.CurrentAddress.Pincode,
                    "PermanentAddress.DoorNumber":check.PermanentAddress.DoorNumber,
                    "PermanentAddress.Street":check.PermanentAddress.Street,
                    "PermanentAddress.Area" :check.PermanentAddress.Area,
                    "PermanentAddress.City" : check.PermanentAddress.City,
                    "PermanentAddress.State" : check.PermanentAddress.State,
                    "PermanentAddress.Pincode" : check.PermanentAddress.Pincode
                               }
            }, { multi: true }); 
         return true;       
    }
    catch (err) {
        return false;
    }
};
let Familyupdate = async (check) => {
    //console.log(check)
    try {
       // let match = await employee.find([{$match:{$and:[{"MobileNumber":check.MobileNumber},{"PAN":check.PAN},{"Aadhaarno":check.Aadhaarno}]}}])
       // console.log(match)
        let users = await employee.findOneAndUpdate({ "Employeeid": check.Employeeid },
            {
                $set: {
                    "FamilyDetails.SpouseName": check.SpouseName,
                    "FamilyDetails.Noofkids": check.Noofkids,
                    "FamilyDetails.KidsName": check.KidsName,
                    "FamilyDetails.DOB": check.DOB,
                    "FamilyDetails.Fupdatedon" : check.Fupdatedon
                }
            }, { multi: true }); 
         return true;       
    }
    catch (err) {
        // console.log(err)
        return false;
    }
};
const UpdateBankDetails=async (info)=>{
    try {
        console.log(info)
        const users = await employee.findOneAndUpdate(
           {"Employeeid" : info.Employeeid},
           { $set:
              {        
                "BankName": info.BankName,
                "BankAcNumber": info.BankAcNumber,
                "BankIFSCCode": info.BankIFSCCode,
                "BankBranch": info.BankBranch,
                "Bupdatedon" : info.Bupdatedon
               }},
            {multi:true});
        return true;
   } catch(err) {
       console.log(err)
       return false
   }
}
let professional = async (info) => {
    try {
        let proff = await employee.findOneAndUpdate({ "Employeeid": info.Employeeid }, {
            $set: {  
                "ProfessionalDetails.Experience.Companyname": info.Companyname,
                "ProfessionalDetails.Experience.Designation": info.Designation,
                "ProfessionalDetails.Experience.FromDate": info.FromDate,
                "ProfessionalDetails.Experience.ToDate": info.ToDate,
                "ProfessionalDetails.Experience.Salary": info.Salry,
                "ProfessionalDetails.DocumentsAttached": info.DocumentsAttached,
                "ProfessionalDetails.CurrentDepartment": info.CurrentDepartment,
                "ProfessionalDetails.Currentdesignation": info.Currentdesignation,
                "ProfessionalDetails.Currentsalary": info.Currentsalary,
                "ProfessionalDetails.Dateofjoining": info.Dateofjoining,
                "ProfessionalDetails.EmpID": info.EmpID,
                "ProfessionalDetails.ReportingTo": info.ReportingTo,
                "ProfessionalDetails.Grade": info.Grade,
                "ProfessionalDetails.Worklocation": info.Worklocation,
                "ProfessionalDetails.WFH": info.WFH,
                "ProfessionalDetails.PF": info.PF,
                "ProfessionalDetails.UANNumber": info.UANNumber,
                "ProfessionalDetails.PFNumber": info.PFNumber,
                "ProfessionalDetails.Nominee": info.Nominee,
                "ProfessionalDetails.ResignationDate": info.ResignationDate,
                "ProfessionalDetails.DateofLeaving": info.DateofLeaving,
                "ProfessionalDetails.OfficalEmailid": info.OfficalEmailid
            }
        }, { multi: true })

        return true;

    } catch (err) {
        console.log(err)

    }
}
const UpdateSalaryDetails=async (info)=>{
    try {
        console.log(info)
        const users = await employee.findOneAndUpdate(
           {"Employeeid" : info.Employeeid},
           { $set:
              {        
                "SalaryDetails.Supdatedon" : info.Supdatedon,
                  "SalaryDetails.Designation": info.Designation ,
                  "SalaryDetails.DesignEffectfrom": info.DesigEffectfrom,
                  "SalaryDetails.Salary": info.Salary,
                  "SalaryDetails.SalaryEffectivefrom":info.SalaryEffectivefrom ,
                  "SalaryDetails.Grade": info.Grade,
                  "SalaryDetails.GradeEffectivefrom": info.GradeEffectivefrom
               }},
            {multi:true});
        return true;
   } catch(err) {
       console.log(err)
       return false
   }
}
const UpdateEductionDetails=async(data)=>{
    try {
        const users = await employee.findOneAndUpdate(
           {"Employeeid" : data.Employeeid},
           { $set:
              {
                   "EducationQualification.Qupdatedon" : data.Qupdatedon,
                   "EducationQualification.SSLC": data.SSLC,
                   "EducationQualification.SSLCPassout": data.SSLCPassout,
                   "EducationQualification.HSC": data.HSC,
                   "EducationQualification.HSCPassout": data.HSCPassout,
                   "EducationQualification.UG": data.UG,
                   "EducationQualification.UGPassout": data.UGPassout,
                   "EducationQualification.PG": data.PG,
                   "EducationQualification.PGPassout": data.PGPassout,
                   "EducationQualification.others": data.others,
                   "EducationQualification.certifications": data.certifications,
                   "EducationQualification.DocumentsAttached": data.DocumentsAttached
               }},
            {multi:true});
        return true;
   } catch(err) {
       console.log(err)
       return false
   }
}
const UpdatePayrollDetails=async(check)=>{
    try {
        const users = await employee.findOneAndUpdate(
           {"Employeeid" : check.Employeeid},
           { $set:
              {
                "Payroll.Payrollupdatedon":check.Payrollupdatedon,
                "Payroll.Payrollyear": check.Payrollyear ,
               "Payroll.PayrollMonth": check.PayrollMonth,
                "Payroll.Basic": check.Basic,
                "Payroll.HRA": check.HRA,
                "Payroll.Conveyance": check.Conveyance,
                "Payroll.OtherAllowance": check.OtherAllowance,
                "Payroll.GrossSalary_A": check.GrossSalary_A,
                "Payroll.LossofPay": check.LossofPay,
                "Payroll.ProfessionalTax": check.ProfessionalTax,
                "Payroll.PFEmployee": check.PFEmployee,
                "Payroll.ESICD": check.ESICD,
                "Payroll.TotalDeduction_B": check.TotalDeduction_B,
                "Payroll.NetPay": check.NetPay, 
                "Payroll.PFemployer": check.PFemployer,
                "Payroll.ESIC": check.ESIC,
                "Payroll.HealthPolicy": check.HealthPolicy,
                "Payroll.PersonalAccidentalPolicy": check.PersonalAccidentalPolicy,
                "Payroll.TotalCompanyContribution_C": check.TotalCompanyContribution_C,
                "Payroll.CosttoCompany": check.CosttoCompany,
                "Payroll.LOPDays": check.LOPDays
               }},
            {multi:true});
        return true;
   } catch(err) {
       console.log(err)
       return false
   }
}
module.exports = {
    saveuserdetails,
    Familyupdate,
    professional,
    UpdateSalaryDetails,
    UpdateEductionDetails,
    UpdatePayrollDetails,
    updateempdetails,
    Addrupdate,
    UpdateBankDetails
};
