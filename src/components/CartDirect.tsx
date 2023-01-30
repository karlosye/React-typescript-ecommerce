import "./CartDirect.css";
import { Link } from "react-router-dom";

const CartDirect = () => {
  return (
    <>
      <div className="container-direct">
        <ul>
          <li>
            <Link className="animated-arrow" to="/store">
              <span className="the-arrow -left">
                <span className="shaft"></span>
              </span>
              <span className="main-direct">
                <span className="text">Explore More</span>
                <span className="the-arrow -right">
                  <span className="shaft"></span>
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CartDirect;
