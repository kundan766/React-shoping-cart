




import React, { useState, useEffect } from "react";
import "./Productstyle.css";
import { useDispatch } from 'react-redux';

import { addToCart as addToCartAction } from "../features/cartSlice";

const Product = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const addToCart = ( product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log(product);
  };

  const Item = ({ item }) => {
    const dispatch = useDispatch();
  
    const handleAddToCart = () => {
      dispatch(addToCartAction(item)); // Use the renamed function from cartSlice
    };

    return (
      <li key={item.id} className="product-item">
        <img
          src={item.image}
          alt={item.title}
          className="product-image"
        />
        <h3 className="product-title">{item.title}</h3>
        <p className="product-price">Price: ${item.price}</p>
        <button onClick={handleAddToCart}>Add To Cart</button>
      </li>
    );
  };

  return (
    <div className="products">
      <h2>Products</h2>
      <ul className="product-list">
        {data.map((product) => <Item key={product.id} item={product} />)}
      </ul>

      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Product;
