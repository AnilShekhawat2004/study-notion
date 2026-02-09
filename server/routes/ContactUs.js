const express = require("express");
const router = express.Router();

//import contact us controller
const{contactUs} = require("../controllers/contactUs");

//contact us route
router.post("/contactUs", contactUs);

module.exports = router;