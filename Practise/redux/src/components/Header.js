const Header = (props) => {
    console.log(props.cardData)
    return (
      <div className="nav-bar">
        <div>
          <span className="cart-count">{props.cardData.length}</span>
          <img className="add-to-cart" src={process.env.PUBLIC_URL+"cart.png"} />
        </div>
      </div>
    );
  };
  
  export default Header;
  