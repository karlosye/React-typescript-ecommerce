import { Button, Stack } from "react-bootstrap";
import { useCartContext } from "../context/shoppingCartContext";
import storeItems from "../data/items.json";

type cartItemProperty = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: cartItemProperty) => {
  const { removeItemFromCart } = useCartContext();

  // import the dummy date:
  const item = storeItems.find((storeItem) => {
    return storeItem.id === id;
  });

  if (!item) {
    return null;
  }

  return (
    <Stack direction="horizontal" gap={3} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "120px", height: "70px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          <span className="text-muted" style={{ fontSize: "15px" }}>
            x {quantity}
          </span>
        </div>
        <div className="text-muted">$ {item.price}</div>
      </div>
      <div>$ {item.price * quantity}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => {
          removeItemFromCart(id);
        }}
      >
        X
      </Button>
    </Stack>
  );
};

export default CartItem;
