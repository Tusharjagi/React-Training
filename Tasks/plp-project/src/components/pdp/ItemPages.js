import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {useParams } from "react-router-dom";
import getProducts from "../../services/api";

const ItemPage = () => {

  const [item, setItem] = useState([]);
  const params = useParams();
  const paramsItemId = params.itemId;
  // console.log(paramsItemId)
  // console.log(item[paramsId - 1].image)
  
  
  useEffect(() => {
    const promise = getProducts(item);
    promise.then((data) => setItem(data));
  },[]);

  const data = item[paramsItemId -1]
  console.log(data)
  // const {price, description, image} = item[paramsItemId]

  
  // const itemsData = item[4]
  // const itemsPrice = itemsData.price
  // console.log(itemsPrice)
  // const data = item[paramsId]
  // console.log(data.price)
  // console.log(item[paramsId -1].price)
  
  // const data = item
  // // const {image, description, price} = data
  // console.log(data)
  return (
    <Container>
      <Row>
        <Col>
          <Card.Img className="desc-image"/>
        </Col>
        <Col xs={9}>
          <Card.Body>
            <Card.Text className="desc-detail">Description</Card.Text>
            <Card.Text className="desc-decription">
              <span>description</span>
            </Card.Text>
            <Card.Title className="desc-price">
              <span>Price </span>
              <span>$ price.price</span>
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
