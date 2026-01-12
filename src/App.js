import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Payment from "./pages/Payment";
import Cart from "./pages/Cart";
import OrderSuccess from "./pages/OrderSuccess";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<OrderSuccess />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
