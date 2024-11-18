import React, { useState, useEffect } from 'react';
import ProductTable from "./components/ProductTable/producttable";


async function fetchData() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.slice(0, 10);
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setProducts(data);
      setLoading(false); 
    };

    getData();
  }, []);

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <div className="product-table-container">
      <h1>Product List</h1>
      <ProductTable products={products} />
    </div>
  );
}

export default App;
