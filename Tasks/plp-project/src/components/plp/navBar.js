import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import HelpIcon from "@mui/icons-material/Help";
import { BrowserRouter , Link, Outlet } from "react-router-dom";
import { valueToPercent } from "@mui/base";

const TopNavBar = () => {
  return (
    <BrowserRouter>
      <Navbar className="bg">
        <Navbar.Brand href="#home">
          <Image className="logo" src={process.env.PUBLIC_URL + "Logo.webp"} />
        </Navbar.Brand>
        <Container>
          <Nav className="me-auto">
            {/* <a className="bg" href="/">Home </a> */}
            {/* <NavLink> */}
            {/* <Link to="/" >Home</Link>
            <Link to="/products" >Product</Link> */}
            
            <a href="/">Home</a>
            <a href="/products">Products </a>
            {/* </NavLink> */}
            {/* <Link to="/">Home</Link> */}
            {/* <Nav.Link className="bg" href="/">
            Home
          </Nav.Link> */}
            {/* <NavLink>
              <Link to="/products">
                  Products
              </Link>
          </NavLink> */}
            {/* <Nav.Link className="bg" href="/products">
            Products
          </Nav.Link> */}
          
          </Nav>
          {/* <Outlet/> */}
          <input
            className="Product-search"
            type="search"
            placeholder="Products"
          />
          <button className="search-pro">Search</button>
          <AddShoppingCartIcon className="shopping" />
          <HelpIcon className="help-icon" />
        </Container>
      
      </Navbar>
    </BrowserRouter>
  );
};

export default TopNavBar;
