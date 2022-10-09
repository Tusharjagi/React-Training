const Home = () => {
  return (<div><h1>Home Component</h1>
    <div className="cart-wrapper">
        <div className="img-wapper-item">
            <img src="https://picsum.photos/id/237/200"/>
        </div>
        <div className="text-wapper-item">
            <span>Text Image</span>
            <span>Price : $1000</span>
        </div>
        <div className="btn-wapper-item">
            <button>Add to card</button>
        </div>
    </div>
  </div>);
};

export default Home;
