// src/App.js
import React from 'react';
import ProductCatalog from './Components/ProductCatalog';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="my-4 text-center">Product Catalog</h1>
        <ProductCatalog />
      </div>
    </div>
  );
}

export default App;
