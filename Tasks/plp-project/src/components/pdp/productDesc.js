import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

const ProductDesc = (props) => {
  const productId = props.itemId;

  const params = useParams();
  
  console.log(params)

  // console.log(props.itemId)

  const descriptions = props.lists[productId - 1].description;
  const images = props.lists[productId - 1].image;
  const prices = props.lists[productId - 1].price;

  // console.log(props.lists[4].title)

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

export default ProductDesc;
