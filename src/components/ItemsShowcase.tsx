import "./ItemsShowcase.css";

import dummy_item_gallery from "../data/items-gallery.json";
import ProductCard from "./Product-Card";
import { useState } from "react";

const ItemsShowcase = () => {

  const [zindexesArray, setZindexArray] = useState<number[]>([0,0,0,0,0,0]);

  const clickProductHandler = (id:number) => {
    setZindexArray((prevState) => {

      const newZindexArray = prevState.map((item, index) => {
        if (index === id-1) {
          return 10;
        } else {
          return 0;
        }
      });

      return newZindexArray;
    })
  }

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
            <div className="row-items">
              {dummy_item_gallery.map((item, index) => {
                return (
                  <ProductCard key={item.id} id={item.id} zindex={zindexesArray[index]} clickProductHandler={clickProductHandler}/>
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
