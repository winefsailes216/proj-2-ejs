//import
const express = require("express");
const addRouter = express.Router();
const connection = require("../lib/connection.js");
const { throws } = require("assert");
//Display use get
addRouter.get("/add", (req, res) => {
   res.render("add", {
      header: "Add New Vehicle",
   });
});
//ADD records use post
addRouter.post("/update", (req, res) => {
   let addData = {
      vehicle: req.body.vehicle,
      make_model: req.body.make_model,
      year: req.body.year,
      description: req.body.description,
      status: req.body.status,
   };
   let sql = "INSERT INTO records SET ? ";
   let query = connection.query(sql, addData, (err, records) => {
      // if is working
      //if(err) throw err
      // // res.send('ADDED')
      // res.redirect('/')
      //trycatch also working
      try {
         res.redirect("/records");
         // res.json(records)
      } catch (error) {
         console.log("Error add");
      }
   });
});

module.exports = addRouter;
