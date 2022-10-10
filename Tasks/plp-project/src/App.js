import TopNavBar from "./components/plp/navBar";
import CardComponents from "./components/plp/Cards";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// const CardComponents = React.lazy(() => import('./components/plp/Cards'));

function App() {
  return (
    <BrowserRouter>
    <TopNavBar />
      <Routes>
        <Route path="/" end element={<div>Home page</div>} />
        <Route
          path="/products"
          element={<CardComponents/>}
        />
        {/* <Route path="/products/:itemId" element={<ItemPage lists={list} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
