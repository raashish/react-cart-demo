import React, { useEffect, useReducer } from 'react';
import './style.css';
import axios from 'axios';
import { cartReducer } from './reducers/cartReducer';

export default function App() {
  const [state, dispatch] = useReducer(cartReducer);

  const fetchProducts = async () => {
    const { data } = await axios.get('https://dummyjson.com/products');
    console.log(data.products);
  };

  useEffect(() => {
    fetchProducts();
  });

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
