import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItem";
import { useEffect } from "react";

export const Store = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <h1>Store page</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => {
          return (
            <Col>
              <StoreItem {...item} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};
