import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductTable from "./components/ProductTable/producttable";
import ProductDetailPage from './components/ProductDetailPage/ProductDetailPage';



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
    <h1>Product listing</h1>
    

    <Router>
    <Routes>
      <Route
        path="/"
        element={<ProductTable products={products} />}
      />
      <Route
        path="/product/:id"
        element={<ProductDetailPage />}
      />
    </Routes>
  </Router>
  </div>
 
  );
}

export default App;
