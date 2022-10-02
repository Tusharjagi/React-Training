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
    })
  }, []);

  const onShopHandler = (e) => {
    // history.pushState("/4")
    // history.pushState()
    const itemValue = e.target.value
    console.log(itemValue)
    // <BrowserRouter></BrowserRouter>
  }

  return (
    <>
      <TopNavBar />
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<div>Home page</div>}/>    
          <Route path="/products" element={<CardComponents lists={list} loadings={loading} shopHandle={onShopHandler} />}/>
        </Routes>
      </BrowserRouter>
      
      {/* <ProductDesc lists={list}/> */}
    </>
  );
}

export default App;
