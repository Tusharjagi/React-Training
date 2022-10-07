import { useEffect, useState } from "react";
import getProducts from "./services/api";
import TopNavBar from "./components/plp/navBar";
import CardComponents from "./components/plp/Cards";
import ProductDesc from "./components/pdp/productDesc";
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";

function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemId, setItemId] = useState();
  // console.log(itemId)
  useEffect(() => {
    const promise = getProducts(list);
    promise.then((data) => setList(data));
    setTimeout(() =>  {
      setLoading(false);
    },1500)
  }, []);
  

  const targetValues = (e) => {
    setItemId(...e.target.value)
    // console.log(targetValue);
  }

  return (
    <>
      <TopNavBar />
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<div>Home page</div>}/>    
          <Route path="/products" element={<CardComponents lists={list} loadings={loading} targetValue={(e)=>targetValues(e)} />}/>
          <Route path={"/products/:productsId"} element={<ProductDesc lists={list} itemId={itemId} />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
