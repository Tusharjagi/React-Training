import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const productDesc = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card.Img
              className="desc-image"
              src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
            />
          </Col>
          <Col xs={9}>
            <Card.Body>
              <Card.Text className="desc-decription">
                descriptidsffffffsdfaf
              </Card.Text>
              <Card.Title className="desc-price">
                <span>Price</span>
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
    </>
  );
};

export default productDesc;
