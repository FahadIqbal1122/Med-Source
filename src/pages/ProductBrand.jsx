import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import ProductCard from '../components/ProductCard';


const ProductBrand = () => {
  const { brand } = useParams()
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  const handleSubmit = async (productId) => {
    navigate(`/products/details/${productId}`)
  }

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/products`);
        const filteredProducts = res.data.filter(product => product.brand === brand);
        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getAllProducts();
  }, [brand]);

  return (
    <>
      <h2>{brand} Products</h2>
      <div className="products-page-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          img={product.image}
          onClick={() => handleSubmit(product.id)}
        />
      ))}
      </div>
    </>
  );
};

export default ProductBrand;
