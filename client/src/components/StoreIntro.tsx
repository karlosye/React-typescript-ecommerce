import { Link } from "react-router-dom";
import "./StoreIntro.css";

const StoreIntro = () => {
  return (
    <>
      <div className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div>
                <img
                  src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Samsung-Galaxy-S20-Family-CC?wid=517&hei=291&fit=crop"
                  className="about_img"
                />
              </div>
            </div>
            <div className="col-md-6 about_description">
              <h1 className="about_taital">About company</h1>
              <div className="border"></div>
              <p className="about_text">
                Ye's electornic store is a well-known electornic merchandise
                that has been operating in the Ontario region for more than 10
                years. With excellent product quality and good customer service,
                Ye's electronic store is dedicated to bring high quality goods
                and services to our customer.{" "}
              </p>
              <div className="read_bt_1">
                <Link to="/about">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreIntro;
