const Home = (props) => {
  console.log(props.cardData)
  return (
    <div className="App">
      <div >
        <span className="cart-count">{props.cardData.length}</span>
        <img className="add-to-cart" src={process.env.PUBLIC_URL+"cart.png"} />
      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wapper-item">
          <img src="https://picsum.photos/id/237/100" />
        </div>
        <div className="text-wapper-item">
          <span>Text Image</span>
          <span>Price : $1000</span>
        </div>
        <div className="btn-wapper-item">
          <button onClick={() => props.addToCartHandler({
            price:1000,name:"iphone 14"
          })} >Add to card</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
