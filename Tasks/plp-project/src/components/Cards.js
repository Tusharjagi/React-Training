import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const CardComponents = (props) => {
  const displayData = props.lists.map((items) => {
    const titles = items.title;
    const prices = items.price;
    const ratings = items.rating.rate;
    const images = items.image;
    return (
      <>
        <Card className="Card-style">
        <div className="rating-start">{ratings}</div>
          <Card.Img src={images} />
          <Card.Body>
              <Card.Title>{titles}</Card.Title>
              <Card.Text className="price-tag">$ {prices}</Card.Text>
              {ratings.rate}
              
            <div>
              <Button className="shop-button" variant="success">
                Shop
              </Button>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  });

  return (
    <>
      <Container className="container-data">
        <Row>{displayData}</Row>
      </Container>
    </>
  );
};

export default CardComponents;
