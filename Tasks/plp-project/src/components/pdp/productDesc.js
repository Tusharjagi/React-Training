import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const productDesc = (props) => {
  // console.log(props.lists.image)
  // const images = props.lists.image;
  // console.log(images.images)
  // const descriptions = props.lists.description;
  // const prices = props.lists.price;
  // console.log(props.lists.image)
  // // console.log(props.lists[7].image)
  // const PDP = props.lists[4];
  // const images = PDP.image;
  // const descriptions = PDP.description;
  // const prices = PDP.price;
  // console.log(images);
  // const images = PDP.image;
  // console.log(PDP.image)
  // const images = items.image;
  // const descriptions = items.description;
  // const prices = items.price;
  // console.log(items)
  // console.log(props.shopHandle);
  // console.log(props.lists.image)

  // const itemsId = props.itemsIds;
  // console.log(props.itemsIds)
  // console.log(props.lists[itemsId])


  // console.log(props.itemsIds)
  // console.log(props.itemsIds)
  // console.log(props.lists[4].title)
  // console.log(props.lists[itemsIds])




  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card.Img
              className="desc-image"
              src={"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"}
            />
          </Col>
          <Col xs={9}>
            <Card.Body>
            <Card.Text className="desc-detail">
                <h4>
                  Description
                </h4>
              </Card.Text>
              <Card.Text className="desc-decription">
                <span>
                  The color could be slightly different between on the screen
                  and in practice. Please note that body builds vary by
                  person, therefore, detailed size information should be
                  reviewed below on the product description."
                </span>
              </Card.Text>
              <Card.Title className="desc-price">
              <span>Price </span>
                <span>$ 200</span>
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
