const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminRoute = require("./admin");

const shopController = require("../controllers/shop");

const router = express.Router();

router.get("/", shopController.getIndex);
router.get("/products", shopController.getProducts);

// path/products/productId
router.get("/products/:productId", shopController.getProductDetail);

router.get("/cart", shopController.getCart);
router.post("/cart", shopController.postItemToCart);
router.get("/checkout", shopController.getCheckout);
router.get("/orders", shopController.getOrders);

// delete item from cart:
router.post("/delete-cart-item", shopController.postItemCartDelete);

router.post("/add-to-cart", shopController.postItemToCart);

module.exports = router;
