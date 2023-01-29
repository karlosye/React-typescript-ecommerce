import { useState } from "react";
import "./Product-Card.css";

type ProductCardPropType = {
  id: number;
  zindex: number;
  name:String,
  imageUrl: String,
  clickProductHandler: (id:number) => void
};

const ProductCard = ({ id,zindex,name,imageUrl,clickProductHandler }: ProductCardPropType) => {
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

  const imageStyle = { backgroundImage: "url(" + `${imageUrl}` + ")"}

  return (
    <div
      className="pic-container"
      onClick={() => {
        onClickHandler(id);
      }}
    >
      <div className="parent">
        <div className={`wrapper ${isClicked ? "open" : " "}`} style={wrapperStyle}>
          <div className="content">
            <div className="img" style={imageStyle}></div>
            <div className="text">
              <div className="line title">{name}</div>
              <div className="line subtitle">Check out our {name}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
