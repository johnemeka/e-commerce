import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";
import { useEffect,useState } from "react";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat, filters, sort}) => {

  const [products, setProducts] = useState([]);
const [filteredProducts, setFilteredProducts] = useState([]);

useEffect(() => {
  const getProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
       // Update the state with the fetched data
      console.log(res);  // Log the fetched data
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  getProducts();
}, [cat]); 
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
