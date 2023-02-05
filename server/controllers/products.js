/*********************************/
const Product = require("../models/product");

// customer shop routes
module.exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

module.exports.getCart = (req, res, next) => {
  res.render("shop/cart", { pageTitle: "cart page", path: "/cart" });
};

module.exports.getProductsCustomer = (req, res, next) => {
  res.render("shop/index", {
    pageTitle: "customer products page",
    path: "/products",
  });
};

/*********************************/