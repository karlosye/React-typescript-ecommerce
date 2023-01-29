import "./ItemsShowcase.css";

import dummy_item_gallery from "../data/items-gallery.json";

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
          <div className="product-gallery">
            <div className="row">
              {dummy_item_gallery.map((item) => {
                return (
                  <div className="pic-container" key={item.id}>
                    <div className="parent">
                      <div className={`wrapper thumb-${item.id}`}>
                        <div className="content">
                          <div className="img">dsfd</div>
                          <div className="text">
                            <div className="line title"></div>
                            <div className="line subtitle"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemsShowcase;
