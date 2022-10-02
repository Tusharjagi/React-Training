import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HelpIcon from '@mui/icons-material/Help';

const TopNavBar = () => {
    return (
        <>
        <Navbar className='bg'>
        <Navbar.Brand href="#home"><Image className='logo' src={process.env.PUBLIC_URL + "Logo.webp"}/></Navbar.Brand>
        <Container>
          <Nav className="me-auto" >
          <Nav.Link className='bg' href="#home">Home</Nav.Link>
            <Nav.Link className='bg' href="#home">Products</Nav.Link>
          </Nav>
          <input className='Product-search' type="search" placeholder="Products"/>
          <button className='search-pro'>Search</button>
          <AddShoppingCartIcon className='shopping'/>
          <HelpIcon className='help-icon'/>
        </Container>
      </Navbar>  
      </>
    );
}
 
export default TopNavBar;