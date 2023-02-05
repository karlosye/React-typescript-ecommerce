const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");

// GET /admin -> get all the products
router.get("/", adminController.getAllProducts);

/*****************************/
// /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

// /admin/edit-product => GET
router.get("/edit-product/:productId", adminController.getEditProduct);

// /admin/edit-product => POST : POST request to handle edit product
router.post("/edit-product", adminController.postEditProduct);

// /admin/products => GET
router.get("/products", adminController.getProducts);

// // /admin/delete-product => POST
router.post("/delete-product", adminController.deleteProduct);
/*****************************/

module.exports = router;
