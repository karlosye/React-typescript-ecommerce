import { Offcanvas, Stack } from "react-bootstrap";
import { useCartContext } from "../context/shoppingCartContext";
import CartItem from "./CartItem";
import StoreItem from "./StoreItem";
import availableItems from "../data/items.json";

type shoppingCartPropType = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: shoppingCartPropType) => {
  const { closeCart, cartItems } = useCartContext();

  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
          {/* <div className="ms-auto fw-bold fs-5">
            Total:{" "}
            {cartItems.reduce((totalPrice, cartItem) => {
              const foundItem = availableItems.find((item) => {
                item.id === cartItem.id;
              });
              totalPrice =
                totalPrice + (foundItem?.price || 0) * cartItem.quantity;
              return totalPrice;
            }, 0)}
          </div> */}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
