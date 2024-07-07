import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartPro from '../pages/CartPro'

const CartButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/CartPro'); // Adjust the path according to your routing
  };

  return (
    <div className="cart-button" onClick={handleClick}>
      <img src="../public/images/shopping-cart.png" alt="Cart" />
    </div>
  );
};

export default CartButton;
