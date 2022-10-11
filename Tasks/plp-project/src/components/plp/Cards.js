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
  
  const displayLists = list.map((items) => {
    const {title, price, rating, image, id} = items;
    return (
      <Card className="Card-style" key={id}>
        <div className="images">
          <Card.Img src={image} />
        </div>
        <Card.Body>
          <Card.Title className="title-text">{title}</Card.Title>
          <Card.Text className="price-tag">$ {price}</Card.Text>
          <div>
            <div className="rating-start">
              {" "}
              <StarRateIcon /> {rating.rate}
            </div>
            <Button
              onClick={(e) => handleOnClickButton(e)}
              value={id}
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
      <Row>{displayLists}</Row>
    </Container>
  );

  return <>{renderCheck}</>;
};

export default CardComponents;
