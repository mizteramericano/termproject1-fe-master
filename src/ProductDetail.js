import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
// import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Nav from './component/Nav';
import './component/stylesheet/pdshopcard.css';
import './component/stylesheet/productpage.css';

const ProductDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [shopinfo, setShopInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function getItem() {
            try {
                const response = await fetch(`http://localhost:8080/item/${productId}`);
                if (!response.ok) throw new Error("Network response was not ok");
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        }
        getItem();
        async function getShopInfo() {
            try {
                const response = await fetch(`http://localhost:8080/shopinfo/${productId}`);
                if (!response.ok) throw new Error("Network response was not ok");
                const data = await response.json();
                setShopInfo(data);
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }

        }
        getShopInfo();


    }, [productId, navigate]);

    if (loading) return <p>Loading products...</p>;

    return (
        <div>
            {/* <Navbar /> */}
            <Nav />
            <div className="product-detail-container">
                {product.map((product) => (

                    <div className="product-detail-card">
                        <img src={`/images/${product.pic}`} alt={product.p_name} className="image" />
                        <div className="product-info">
                            <h2 className="product-name">{product.p_name}</h2>
                            <p className="price">{product.price} ฿</p>
                            <p>จำนวนสินค้าคงเหลือ : {product.stock} ชิ้น</p>
                            <div className="action-buttons">

                                <button className="add-to-cart-button">เพิ่มลงตะกร้า</button>
                                <button className="buy-now-button">ซื้อเลย</button>
                            </div>
                        </div>
                    </div>

                ))}

                {shopinfo.map((shop) => (
                    <div className="store-card">
                        <div className="store-card-left">
                            <img src={`/images/${shop.s_pic}`} alt={shop.s_name} className="store-logo" />
                            <div className="store-name">{shop.s_name}</div>
                        </div>
                        <Link
                            to={shop.s_id ? `/shop/${shop.s_id}` : '#'}
                            key={shop.s_id}
                            className="shop"
                        >
                            <button className="view-store-btn">
                                เยี่ยมชมร้านค้า
                            </button>
                        </Link>
                    </div>
                ))}



                {product.map((product) => (
                    <div className="product-detail-description">
                        <h3>รายละเอียดสินค้า</h3>
                        <p>สร้างเมื่อวันที่ : {product.create_at}</p>
                        <p>อัพเดทเมื่อวันที่ : {product.update_at}</p>
                        <p>
                            ประเภท : {product.c_id === 1 ? 'makeup' : product.c_id === 2 ? 'skincare' : 'อื่นๆ'}
                        </p>

                    </div>
                ))}

            </div>
            <Footer/>
        </div>
    );
};

export default ProductDetail;
