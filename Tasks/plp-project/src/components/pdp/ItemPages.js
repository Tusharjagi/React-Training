import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import getProducts from "../../services/api";

const ItemPage = () => {
  const [item, setItem] = useState([]);
  const params = useParams();
  const paramsItemId = params.itemId;
  useEffect(() => {
    const promise = getProducts(item);
    promise.then((data) => setItem(data));
  }, []);
  const data = item[paramsItemId - 1];
  const images = data?.image;
  const descriptions = data?.description;
  const prices = data?.price;
  return (
    <Container>
      <Row>
        <Col>
          <Card.Img className="desc-image" src={images} />
        </Col>
        <Col xs={9}>
          <Card.Body>
            <Card.Text className="desc-detail">Description</Card.Text>
            <Card.Text className="desc-decription">
              <span>{descriptions}</span>
            </Card.Text>
            <Card.Title className="desc-price">
              <span>Price </span>
              <span>$ {prices}</span>
            </Card.Title>
          </Card.Body>
          <Button className="add-to-cart" variant="success">
            ADD TO CART
          </Button>
          <Button className="buy-now" variant="success">
            BUY NOW
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemPage;
