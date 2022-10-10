import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import StarRateIcon from "@mui/icons-material/StarRate";
import Loading from "./loading";
import { useNavigate } from "react-router-dom";
import getProducts from "../../services/api";
import { useState, useEffect } from "react";

const CardComponents = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const handleOnClickButton = (e) => {
    navigate(e.target.value);
  };

  useEffect(() => {
    const promise = getProducts(list);
    promise.then((data) => setList(data));
    setTimeout(() => {
      setLoading(false);
    },1500);
  }, []);

  const displayItems = list.map((items) => {
    const titles = items.title;
    const prices = items.price;
    const ratings = items.rating.rate;
    const images = items.image;
    const itemId = items.id;
    return (
      <Card className="Card-style" key={itemId}>
        <div className="images">
          <Card.Img src={images} />
        </div>
        <Card.Body>
          <Card.Title className="title-text">{titles}</Card.Title>
          <Card.Text className="price-tag">$ {prices}</Card.Text>
          <div>
            <div className="rating-start">
              {" "}
              <StarRateIcon /> {ratings}
            </div>
            <Button
              onClick={(e) => handleOnClickButton(e)}
              value={itemId}
              className="shop-button"
              variant="success"
            >
              Shop
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  });
  const renderCheck = loading ? (
    <Loading />
  ) : (
    <Container className="container-data">
      <Row>{displayItems}</Row>
    </Container>
  );

  return <>{renderCheck}</>;
};

export default CardComponents;
