import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const CardComponents = React.lazy(() => import("./components/plp/Cards"));
const ItemPage = React.lazy(() => import("./components/pdp/ItemPages"));
const TopNavBar = React.lazy(() => import("./components/plp/navBar"));

function App() {
  return (
    <BrowserRouter>
      <Suspense>
      <TopNavBar />
        <Routes>
          <Route path="/" element={<div>Home page</div>} />
          <Route path="/products" element={<CardComponents />} />
          <Route path="/products/:itemId" element={<ItemPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
