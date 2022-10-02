import { useEffect, useState } from "react";
import getProducts from "./services/api";
import TopNavBar from "./components/plp/navBar";
import CardComponents from "./components/plp/Cards";
import ProductDesc from "./components/pdp/productDesc";

function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const promise = getProducts(list);
    promise.then((data) => setList(data));
    setTimeout(() =>  {
      setLoading(false);
    },1500)
  }, []);

  return (
    <>
      <TopNavBar />
      <CardComponents lists={list} loadings={loading} />
      {/* <ProductDesc/> */}
    </>
  );
}

export default App;
