import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { useSelector } from "react-redux";


const App = () => {
 
const user = useSelector((state) => state.user.currentUser);

  return (
    <div className="">
       <Router> 
        <Routes>
        <Route exact path="/" element={<Home/>} />
          <Route exact path="/products/:category" element={<ProductList />} />
          <Route exact path="/product/:id" element={<Product />} />
         <Route exact path="/login"  element={user ?  (  <Navigate to="/" replace />) : (<Login /> )} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/success" element={<Success/>} />
       
        </Routes>
        
      </Router>
    </div>
  );
};

export default App;