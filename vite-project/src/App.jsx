import React, { useState } from 'react';
import ProductTable from "./components/ProductTable/producttable"

async function fetchData() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

function App() {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const data = await fetchData();
    setProducts(data);
  };

  
  if (products.length === 0) {
    getData();
  }

  return (
    <div className="product-table-container">
      <h1>Product List</h1>
      <ProductTable products={products} />
    </div>
  );
}

export default App;

