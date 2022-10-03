import { useEffect, useState } from "react";
import getProducts from "./services/api";
import TopNavBar from "./components/plp/navBar";
import CardComponents from "./components/plp/Cards";
import ProductDesc from "./components/pdp/productDesc";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const promise = getProducts(list);
    promise.then((data) => setList(data));
    setTimeout(() =>  {
      setLoading(false);
    },2000)
  }, []);

  const onShopHandler = (e) => {
    // history.pushState("/4")
    // history.pushState()
    const itemValue = e.target.value
    console.log(itemValue)
    // return itemValue;
    // <BrowserRouter></BrowserRouter>
    // return itemValue
  }

  return (
    <>
      <TopNavBar />
      <BrowserRouter >
        <Routes>
          {/* <Route path="/" element={<div>Home page</div>}/>     */}
          <Route path="/" element={<CardComponents lists={list} loadings={loading} shopHandle={onShopHandler} />}/>
          <Route path="/3" element={<ProductDesc lists={list}/>}/>
        </Routes>
      </BrowserRouter>
      
      {/* <ProductDesc lists={list}/> */}
    </>
  );
}

export default App;
