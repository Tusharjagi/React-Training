import { addToCart, removeFromCart, emptyCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log("data in main component", data);
  const product = {
    name: "1 phone",
    type: "mobile",
    price: 1000,
    color: "red",
  };
  return (
    <>
      <div>
        <button onClick={() => dispatch(addToCart(product))}>
          Add To Cart
        </button>
      </div>

      <div>
        <button onClick={() => dispatch(removeFromCart(product.name))}>
          Remove from Cart
        </button>
      </div>

      <div>
        <button onClick={() => dispatch(emptyCart(product))}>Empty Cart</button>
      </div>

      <div>
        <button onClick={() => dispatch(productList())}>
          Get Product List
        </button>
      </div>
    </>
  );
}

export default Main;
