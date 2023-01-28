import "./ItemsShowcase.css";

const ItemsShowcase = () => {
  return (
    <>
      <div className="product_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="product_taital">Products</h1>
              <p className="product_text">Working on the product section</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme owl-loaded owl-drag"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemsShowcase;
