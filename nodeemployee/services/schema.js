const mongoose = require('mongoose');
const empSchema = mongoose.Schema({
    Employeeid: { type: String, unique: true },
    FirstName: { type: String },
    LastName: { type: String },
    DateofBirth: { type: String },
    
    FathersName: { type: String },
    Gender: { type: String },
    Married: { type: String },
    MobileNumber: { type: String },
    EmailId: { type: String },
    Aadhaar: { type: String },
    PAN: { type: String },
    PassportNumber: { type: String },
    Eupdatedon : {type:String},
    CurrentAddress: {
        DoorNumber: String,
        Street: String,
        Area: String,
        City: String,
        State: String,
        Pincode: Number
    },
    PermanentAddress: {
        DoorNumber: String,
        Street: String,
        Area: String,
        City: String,
        State: String,
        Pincode: Number
    },
    EmergencyContactNumber: Number,
    EmergencyContactPersonName: String,
    Bloodgroup: { type: String },
    Allergy: { type: String },
    AnyOtherEmployment: { type: String },
    BankName: { type: String },
    BankAcNumber: { type: String },
    BankIFSCCode: { type: String },
    BankBranch: { type: String },
    Bupdatedon : { type: String },
    EmployeeStatus: { type: String },
    DocumentsAttachement: { type: String },
    FamilyDetails: {
        SpouseName: { type: String },
        Noofkids: { type: String },
        KidsName: { type: String },
        DOB: { type: String },
        Fupdatedon:{type:String}
    },
    EducationQualification: {
        Qupdateon : {type:String},
        SSLC: { type: String },
        SSLCPassout: { type: String },
        HSC: { type: String },
        HSCPassout: { type: String },
        UG: { type: String },
        UGPassout: { type: String },
        PG: { type: String },
        PGPassout: { type: String },
        others: { type: String },
        certifications: { type: String },
        DocumentsAttached: { type: String },
        Eupdatedon: {type: String},
    },
    ProfessionalDetails: {
        Experience: {
            Companyname: String,
            Designation: String,
            FromDate: String,
            ToDate: String,
            Salary: String
        },
        DocumentsAttached: String,
        CurrentDepartment: String,
        Currentdesignation: String,
        Currentsalary: String,
        Dateofjoining: String,
        PEmployeeID: String,
        ReportingTo: String,
        Grade: String,
        Worklocation: String,
        WFH: String,
        DateofConfirmationton: String,
        PF: String,
        UANNumber: String,
        PFNumber: String,
        Nominee: String,
        ResignationDate: String,
        DateofLeaving: String,
        OfficalEmailid: String,
        Pupdateon : String,
    },
    SalaryDetails: {
        Supdatedon : {type:String},
        Designation: { type: String },
        DesignEffectfrom: { type: String },
        Salary: { type: String },
        SalaryEffectivefrom: { type: String },
        Grade: { type: String },
        GradeEffectivefrom: { type: String }
    },
    Payroll: {
        Payrollupdatedon:{type:String},
        Payrollyear: {type:String},
        PayrollMonth: {type:String},
        Basic: {type:String},
        HRA: {type:String},
        Conveyance: {type:String},
        OtherAllowance: {type:String},
        GrossSalary_A: {type:String},
        LossofPay: {type:String},
        ProfessionalTax: {type:String},
        PFEmployee: {type:String},
        ESICD: {type:String},
        TotalDeduction_B: {type:String},//Sum of(LOP+ProfTax+PF+ESIC)
        NetPay: {type:String}, //Netpay=GrossSalary_A-TotalDeduction_B
        PFemployer: {type:String},
        ESIC: {type:String},
        HealthPolicy: {type:String},
        PersonalAccidentalPolicy: {type:String},
        TotalCompanyContribution_C: {type:String},
        CosttoCompany: {type:String},
        LOPDays: {type:String}
        
    },
    EmployeeMastersstatus: {
        StatusName: String,
        IsActive: String,
        ActiveSDate: String,
        DeactiveDate: String
    },
   
    
    
});
module.exports = mongoose.model('Employeedetails', empSchema, 'Employeedetails');
