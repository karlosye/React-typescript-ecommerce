import { useState } from "react";
import "./Product-Card.css";

type ProductCardPropType = {
  id: number;
  zindex: number;
  clickProductHandler: (id:number) => void
};

const ProductCard = ({ id,zindex,clickProductHandler }: ProductCardPropType) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const onClickHandler = (id:number) => {

    clickProductHandler(id);

    setIsClicked((prevState) => {
      return !prevState;
    });
  };

  const wrapperStyle = {
    zIndex:zindex
  };

  return (
    <div
      className="pic-container"
      onClick={() => {
        onClickHandler(id);
      }}
    >
      <div className="parent">
        <div className={`wrapper thumb-${id} ${isClicked ? "open" : " "}`} style={wrapperStyle}>
          <div className="content">
            <div className="img"></div>
            <div className="text">
              <div className="line title"></div>
              <div className="line subtitle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
