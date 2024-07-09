import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductBrand = () => {
  const { brand } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`/Products/ProductBrand/${brand}`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, [brand]);

  return (
    <>
      <h2>{brand} Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductBrand;
