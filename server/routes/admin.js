const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");

// GET /admin -> get all the products
router.get("/", adminController.getAllProducts);

module.exports = router;
