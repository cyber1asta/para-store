// CartHold.js
import React from 'react';
import { useSelector } from 'react-redux';

const CartHold = () => {
  const cartItems = useSelector((state) => state.cart.items);

  if (!cartItems || cartItems.length === 0) {
    return <div>No items in the cart</div>;
  }

  return (
    <div>
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CartHold;
