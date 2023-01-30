import styles from "./AboutStore.module.css";

const AboutStore = () => {
  return (
    <div className={styles["about-page"]}>
      <h1>About our store</h1>
      <div className={styles["store-about"]}>
        <div className={styles["store-image"]}>
            <img src="https://media.istockphoto.com/id/918381560/photo/eletronic-department-store-with-bokeh-blurred-background.jpg?b=1&s=170667a&w=0&k=20&c=tgswAZFxMILX-Qs1nYNYhmncCiqEAzCDdK7F6h2Iy9Y="/>
        </div>
        <div className={styles["store-text"]}>
            <h2>Find the best electronics deal</h2>
            <p>Ye's electornic store is a well-known electornic merchandise
                that has been operating in the Ontario region for more than 10
                years. With excellent product quality and good customer service,
                Ye's electronic store is dedicated to bring high quality goods
                and services to our customer.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutStore;
