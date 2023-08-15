import React, { useEffect, useState } from 'react'
import Slider from '../../components/slider/Slider'
import Product from '../../components/products/Product'
import AddProduct from '../../components/products/AddProduct'
import ProductList from '../../components/products/ProductList'
import Cart from '../cart/Cart'
import { Link } from 'react-router-dom'
const Home = () => {
  

  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || []);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [products, cartItems]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };
  const handleDeleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };
  return (
    <div>
      <Slider/>
      <Product/>
      <div className="App">
      <AddProduct onAddProduct={handleAddProduct} />
      <ProductList products={products}
      onDeleteProduct={handleDeleteProduct}
      cartItems={cartItems}
      onAddToCart={handleAddToCart} 
      onRemoveFromCart={handleRemoveFromCart}
      />
       {cartItems.length > 0 && (
        <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
      )}
      <button>
          <Link to="/pages/Cart">Go to Cart</Link>
        </button>
            
          
      </div>
    </div>
  )
}

export default Home
