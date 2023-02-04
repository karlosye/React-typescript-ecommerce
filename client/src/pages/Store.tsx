import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItem";
import { useEffect, useState } from "react";

export const Store = () => {
  window.scrollTo(0, 0);

  const [dbstoreItems, setStoreItems] = useState([]);

  // Fetch store items from MongoDB at initial load
  useEffect(() => {
    const fetchStoreItems = async () => {
      const response = await fetch("http://localhost:8080/admin");
      const fetchedItems = await response.json();
    };
    try {
      fetchStoreItems();
    } catch (error) {
      console.log(error);
    }
  }, []);

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
