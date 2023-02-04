const Product = require("../models/product");

// get request to fetch all products
module.exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    return res
      .status(200)
      .json({ message: "Fetch products successfully", products: products });
  } catch (error) {
    console.log(error);
  }

  // console.log(products)
};
