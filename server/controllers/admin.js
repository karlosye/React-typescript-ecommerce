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
};

/*********************************/
module.exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const imageUrl = req.body.imageUrl;

  // create a new product:
  const newProduct = new Product({
    title: title,
    description: description,
    price: price,
    imageUrl: imageUrl,
    userId: req.user,
  });

  newProduct
    .save()
    .then((response) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

// edit a product controller
module.exports.getEditProduct = async (req, res, next) => {
  // grab the query parameter
  const editMode = req.query.edit;
  const findProduct = await Product.findById(req.params.productId);

  res.render("admin/edit-product", {
    pageTitle: "Edit Product",
    path: "/admin/edit-product",
    edit: editMode === "true" ? true : false,
    product: findProduct,
  });
};

module.exports.deleteProduct = (req, res, next) => {
  const productId = req.body.productId;

  Product.findByIdAndRemove({ _id: productId }, () => {
    res.redirect("/admin/products");
  });
};

module.exports.postEditProduct = async (req, res, next) => {
  // console.log(req.body);
  const productId = req.body.productId;
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const imageUrl = req.body.imageUrl;

  await Product.findByIdAndUpdate(productId, {
    $set: {
      title: title,
      price: price,
      description: description,
      imageUrl: imageUrl,
    },
  });

  res.redirect("/admin/products");
};

module.exports.getProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.render("admin/view-product-admin", {
        prods: products,
        pageTitle: "Admin product",
        path: "/admin/products",
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
/*********************************/