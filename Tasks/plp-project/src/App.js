import { useEffect, useState } from "react";
import getProducts from "./services/api";
import TopNavBar from "./components/plp/navBar";
import CardComponents from "./components/plp/Cards";
import ItemPage from "./components/pdp/ItemPages";
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate, } from "react-router-dom";

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

  return (
    <>
      <TopNavBar />
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<div>Home page</div>}/>    
          <Route path="/products" element={<CardComponents lists={list} loadings={loading}/>} />
          <Route path={"/products/:itemId"} element={<ItemPage lists={list} />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
