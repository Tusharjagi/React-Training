import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import StarRateIcon from "@mui/icons-material/StarRate";
import Loading from "./loding";

const CardComponents = (props) => {
  const displayData = props.lists.map((items) => {
    const titles = items.title;
    const prices = items.price;
    const ratings = items.rating.rate;
    const images = items.image;
    const itemId = items.id;
    return (
      <>
        <Card className="Card-style" key={itemId}>
          <div className="images">
          <Card.Img  src={images} />
          </div>
          <Card.Body>
            <Card.Title className="title-text" >{titles}</Card.Title>
            <Card.Text className="price-tag">$ {prices}</Card.Text>
            <div>
              <div className="rating-start">
                {" "}
                <StarRateIcon /> {ratings}
              </div>
              <Button className="shop-button" variant="success">
                Shop
              </Button>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  });
  console.log(props.loadings)
  const renderCheck = props.loadings ? (
    <Loading />
  ) : (
    <Container className="container-data">
      <Row>{displayData}</Row>
    </Container>
  );

  return <>{renderCheck}</>;
};

export default CardComponents;
