import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProducts from "./Pages/AllProducts";
import AddProducts from "./Pages/AddProducts";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";
import ProductList from "./Pages/ProductList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route path="/add" element={<AddProducts />} />
          <Route path="/product/cart/:id" element={<Cart />} />
          <Route path="/list" element={<ProductList />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
