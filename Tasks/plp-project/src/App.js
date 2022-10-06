import { useEffect, useState } from "react";
import getProducts from "./services/api";
import TopNavBar from "./components/plp/navBar";
import CardComponents from "./components/plp/Cards";
import ProductDesc from "./components/pdp/productDesc";
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
// import { Numbers } from "@mui/icons-material";

function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemId, setItemId] = useState([]);
  // const navigate = useNavigate();
  // const navigate = useNavigate();
  // setItemId(itemId+1)
  // console.log(itemId)
  useEffect(() => {
    const promise = getProducts(list);
    promise.then((data) => setList(data));
    setTimeout(() =>  {
      setLoading(false);
    })
  }, []);

  // const onShopHandler = (e) => {
    
    
  //   const itemValue = e.target.value;
  //   // const itemValue = 9;
  //   // const fix = 
  //   // setItemId([...itemId,itemValue])
  //   // <Navigate to="/"/>
  //   // navigate("/new");
  //   // <Navigate to="/" replace={true} />
  //   console.log(itemValue)
  //   // console.log(itemId);
  // }

  // const onShopHandler = () => {
  //   navigate("/")
  // }

  return (
    <>
      <TopNavBar />
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<div>Home page</div>}/>    
          <Route path="/products" element={<CardComponents lists={list} loadings={loading} />}/>
          <Route path={"/products/:productsId"} element={<ProductDesc lists={list} itemsIds={itemId} />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
