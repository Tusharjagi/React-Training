import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import StarRateIcon from "@mui/icons-material/StarRate";
import Loading from "./loding";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import productDesc from "../pdp/productDesc";

const CardComponents = (props) => {

  const displayData = props.lists.map((items,i) => {
    const titles = items.title;
    const prices = items.price;
    const ratings = items.rating.rate;
    const images = items.image;
    const itemId = items.id;
    // console.log(i);
    // console.log(props.shopHandler);

    

    return (
      <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="products"/ >
        </Routes>
      </BrowserRouter> */}
      <Card className="Card-style" key={i}>
          <div  className="images">
          <Card.Img src={images} />
          </div>
          <Card.Body>
            <Card.Title className="title-text" >{titles}</Card.Title>
            <Card.Text  className="price-tag">$ {prices}</Card.Text>
            <div>
              <div className="rating-start">
                {" "}
                <StarRateIcon /> {ratings}
              </div>
              <Button onClick={props.shopHandle} value={itemId} className="shop-button" variant="success">
                Shop
              </Button>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  });
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
