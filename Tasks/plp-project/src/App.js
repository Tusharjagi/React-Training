import { useEffect, useState } from "react";
import getProducts from "./services/api";
import TopNavBar from "./components/navBar";
import CardComponents from "./components/Cards";

function App() {
  // console.log(ProductApi);
  const [list, setList] = useState([]);
  // console.log(list[5].id)
  // const [loading, setLoading] = useState();
  useEffect(() => {
    // allLists();
    const promise = getProducts();
    promise.then((data) => setList(data));
    // console.log(data);
    // getProducts();
  }, []);

  return (
    <>
      <TopNavBar />
      <CardComponents lists={list}/>
      
    </>
  );
}

export default App;
