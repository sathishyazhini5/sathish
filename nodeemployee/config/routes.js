const express = require("express");
const req = require("express/lib/request");
const router = express.Router();

const user = require("../controller/index");
const empl = require("./verify");



let routes = (app) => {

  
  router.post("/saveData", user.save)
  router.patch("/family",empl, user.FamilyDetails)
  router.patch("/professional", user.ProfessionalDetails)
  router.patch("/salary",user.SalaryDetails)
  router.patch("/education",user.EducationDetails)
  router.post("/login",user.emplogin)
  router.patch("/payroll",user.Payroll)
  router.patch("/updateemp",user.empdetails)
  router.patch("/updateaddr",user.updateaddr)
  router.put("/bankdetails",user.bankdetails)
  router.get("/getdata",user.getalluser)
  
  //router.patch("/trail",user.trail)

  app.use("/api", router);
};

module.exports = routes;