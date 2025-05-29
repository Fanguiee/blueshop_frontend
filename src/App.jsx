import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Home from "./components/Home";

import ProductsPage from "./components/ProductsPage";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
