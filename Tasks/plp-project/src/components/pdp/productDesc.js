import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const productDesc = (props) => {
  // console.log(props.lists[7].image)
  const PDP = props.lists.map((items) => {
    const images = items.image;
    const descriptions = items.description;
    const prices = items.price;
    // console.log(items)
    // console.log(props.shopHandle);
    return (
      <>
        <Container>
          <Row>
            <Col>
              <Card.Img className="desc-image" src={images} />
            </Col>
            <Col xs={9}>
              <Card.Body>
                <Card.Text className="desc-decription">
                  <span>{descriptions}</span>
                </Card.Text>
                <Card.Title className="desc-price">
                  <span>{prices}</span>
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
  });

  return <>{PDP}</>;
};

export default productDesc;
