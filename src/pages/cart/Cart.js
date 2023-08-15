import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  if (!cartItems) {
    return <div>No items in the cart.</div>;
  }
  
  return (
    <div> 
      <h2>Shopping Cart</h2>
      <ul className="cart-list">
        {cartItems.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button onClick={() => onRemoveFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      </div>
  );
};

export default Cart;
