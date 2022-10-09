import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {useParams } from "react-router-dom";

const ItemPage = (props) => {
  const params = useParams();
  // console.log(params)
  const descriptions = props.lists[params.itemId - 1].description;
  const images = props.lists[params.itemId - 1].image;
  const prices = props.lists[params.itemId - 1].price;
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
