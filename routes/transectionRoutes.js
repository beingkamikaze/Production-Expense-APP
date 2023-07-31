const express = require("express");
const {
  addTransection,
  getAllTransection,
  editTransection,
  deleteTransection,
} = require("../controllers/transectionCtrl");

//router object
const router = express.Router();

//routes

//add transection POST method
router.post("/add-transection", addTransection);

//get transection using POST method

router.post("/get-transection", getAllTransection);

//edit transection using POST method
router.post("/edit-transection", editTransection);

//Delete transection using POST method
router.post("/delete-transection", deleteTransection);

module.exports = router;
