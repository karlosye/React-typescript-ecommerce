import Carousel from "react-bootstrap/esm/Carousel";

import classes from "./Carousel.module.css";

const MainCarousel = () => {
  return (
    <Carousel className={classes.carousel}>
      <Carousel.Item className={classes["carousel-item"]}>
        <img
          className="d-block w-100"
          src="https://static.esrgear.com/blog/wp-content/uploads/2022/11/iPhone-14-wallpapers.jpg?w=3000"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Mobile Phones</h3>
          <p>Check out our latest mobile phone series</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/4684315.jpg?w=3000"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Laptops</h3>
          <p>Buy a high performance laptop for both work and gaming</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2019/10/11/fbf5b29a-ec07-11e9-9e8e-4022fb9638c4_image_hires_174226.jpg?itok=DO14Thq0&v=1570786955?w=3000"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Gaming console</h3>
          <p>
            Check out our gaming console from Nintendo to XBOX
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MainCarousel;
