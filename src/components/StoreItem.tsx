import { Button, Card } from "react-bootstrap";

type storeItemType = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: storeItemType) => {
  const quantity = 1;

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">${price}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100"> + Add To Cart</Button>
          ) : (
            <div className="d-flex flex-column align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <Button className="ms-2 me-2">+</Button>
                <div>
                  <span className="fs-2">{quantity}</span> in cart
                </div>
                <Button className="ms-2 me-2">-</Button>
              </div>
              <Button variant="danger" size="sm">Remove</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
