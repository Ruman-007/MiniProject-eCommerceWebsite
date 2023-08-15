import React from 'react';
import Product from './Product';
const ProductList = ({ products, onDeleteProduct, cartItems, onAddToCart, onRemoveFromCart }) => {

  return (
    <div>
      <h2>Product List</h2>
      <ul className="product-list">
        {products.map((product, index) => (
          <li key={index}>
            <Product
              name={product.name}
              price={product.price}
              image={product.image}
            />
              {cartItems.some(item => item.id === product.id) ? (
              <button onClick={() => onRemoveFromCart(cartItems.findIndex(item => item.id === product.id))}>
                Remove from Cart
              </button>
            ) : (
              <button onClick={() => onAddToCart(product)}>
                 Add to Cart
              </button>
            )}
            <button onClick={() => onDeleteProduct(index)}>Delete</button>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
