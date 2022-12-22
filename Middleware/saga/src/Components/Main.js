import { addToCart, removeFromCart, emptyCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>

      <div className="product-container">
        {data.map((item) => (
          <div key={item.id}>
            <div className="product-items">
              <img src={item.photo} height="300px" width="400px" alt="photos" />
            </div>
            <div>Name: {item.name}</div>
            <div>Color: {item.color}</div>
            <div>Price: {item.price}</div>
            <div>Category: {item.category}</div>
            <div>Brand: {item.brand}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add To Cart
              </button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Main;
