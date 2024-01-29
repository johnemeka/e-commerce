import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

const App = () => {


  return (
    <div className="">
       <Router> 
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/products/:category" element={<ProductList />} />
          <Route exact path="/product/:id" element={<Product />} />
          <Route exact path="/login"  element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/cart" element={<Cart/>} />
       
        </Routes>
        
      </Router>
    </div>
  );
};

export default App;