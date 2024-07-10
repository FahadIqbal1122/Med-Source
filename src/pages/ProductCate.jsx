import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import ProductCard from '../components/ProductCard';


const Productcate = () => {
  const { category } = useParams()
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  const handleSubmit = async (productId) => {
    navigate(`/products/details/${productId}`)
  }

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/products`);
        const filteredProducts = res.data.filter(product => product.category === category);
        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getAllProducts();
  }, [category]);

  return (
    
  );
};

export default Productcate;
