// App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ByCategory from './ByCategory';
import HomePage from './HomePage';
import ProductDetail from './ProductDetail';
import ShopPage from './ShopPage'; // หน้าที่จะแสดงสินค้าของร้านนั้น ๆ

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/:shopId" element={<ShopPage />} />
          <Route path="/item/:productId" element={<ProductDetail />} />
          <Route path="/cate/:catId" element={<ByCategory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
