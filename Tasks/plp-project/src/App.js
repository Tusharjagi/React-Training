import { useEffect, useState } from "react";
import getProducts from "./services/api";
import TopNavBar from "./components/navBar";
import CardComponents from "./components/Cards";

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

  return (
    <>
      <TopNavBar />
      <CardComponents lists={list} loadings={loading} />
    </>
  );
}

export default App;
