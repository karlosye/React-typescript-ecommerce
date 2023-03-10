import MainCarousel from "../components/Carousel";
import CartDirect from "../components/CartDirect";
import ItemsShowcase from "../components/ItemsShowcase";
import StoreIntro from "../components/StoreIntro";

export const Home = () => {
  return (
    <>
      <MainCarousel />
      <StoreIntro />
      <ItemsShowcase />
      <CartDirect />
    </>
  );
};
