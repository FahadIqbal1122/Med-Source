import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductBrand = () => {
  const { brand } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
   
    getAllProducts();
  }, [brand]);

  return (
    <>
      <h2>{brand} Products</h2>
      <div className="products-grid">
        {products.length > 0 ? (
          products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found for this brand.</p>
        )}
      </div>
    </>
  );
};

export default ProductBrand;
