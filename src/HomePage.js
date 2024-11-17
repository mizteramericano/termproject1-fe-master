import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Nav from './component/Nav';
import Promotion from './component/promotion';
import './component/stylesheet/random.css';


function HomePage() {
  const [shops, setShops] = useState([]);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  // ดึงข้อมูลร้านค้าทั้งหมดจาก API
  useEffect(() => {
    async function fetchShops() {
      try {
        const response = await fetch("http://localhost:8080/allshop");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setShops(data); // เซ็ตข้อมูลร้านค้า
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchShops();

    async function getProduct() {
      try {
        const response = await fetch("http://localhost:8080/readom");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error:", error);
      }
      finally {
        setLoading(false);
      }
    }
    getProduct();


  }, []);

  if (loading) return <p>Loading shops...</p>;

  return (
    <div>
      {/* <Navbar /> */}
      <Nav />
      <Promotion />
      <h1 className='hed'>สินค้าแนะนำ</h1>
      <div className='pd'>
        {product.map((product) => (
          <div key={product.p_id} className="product">
            <Link to={`/item/${product.p_id}`} key={product.p_id} style={{ textDecoration: 'none' }}>
              <img src={`/images/${product.pic}`} alt={product.p_name} className="product-image" />
              <div className="product-name">{product.p_name}</div>
              <div className="product-price">{product.price} ฿</div>
            </Link>
          </div>
        ))}
      </div>
      <div className="shop-container">
        <h1>ร้านค้าแนะนำ</h1>
        <div className="shops">
          {shops.map((shop) => (
            <Link
              to={shop.s_id ? `/shop/${shop.s_id}` : '#'}
              key={shop.s_id}
              className="shop"
            >
              <img src={`/images/${shop.s_pic}`} alt={shop.s_name} className='img'/>
              <div className="shop-name">{shop.s_name}</div>
              <div className="shop-description">{shop.description}</div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
