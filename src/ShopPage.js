import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './App.css';
// import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Nav from './component/Nav';
import './component/stylesheet/shopdes.css';
import './component/stylesheet/shopproduct.css';


function ShopPage() {
    const { shopId } = useParams(); // รับ shopId จาก URL
    const navigate = useNavigate();
    const [shopdes, setShop] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // ฟังก์ชันสำหรับดึงข้อมูลสินค้าจาก API
    useEffect(() => {

        if (!shopId) {
            console.error("shopId is undefined");
            navigate('/'); // ถ้าไม่มี shopId ให้กลับไปหน้า Home
            return;
        }

        async function fetchProducts() {
            try {
                const response = await fetch(`http://localhost:8080/itembyshop/${shopId}`);
                if (!response.ok) throw new Error("Network response was not ok");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false); // ปิดการโหลด
            }
        }
        fetchProducts();
        async function getShopDes() {
            try {
                const response = await fetch(`http://localhost:8080/shop/${shopId}`);
                if (!response.ok) throw new Error("Network response was not ok");
                const data = await response.json();
                setShop(data);
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }

        }
        getShopDes();
    }, [shopId, navigate]);

    if (loading) return <p>Loading products...</p>;

    return (
        <div className='body'>
            {/* <Navbar /> */}
            <Nav />
            {shopdes.map((shop) => (
                <Container>
                    <Row className='cardd'>
                        <Col><div className="store-logo">
                            <img
                                src={`/images/${shop.s_pic}`}
                                alt={shop.s_name}
                            // className="shop-logo"
                            />
                        </div></Col>
                        <Col sm='7'><div className="store-info">
                            <h2 className="shop-title text-primary">{shop.s_name}</h2>
                            <p className="shop-description">{shop.description}</p>
                        </div></Col>
                        <Col><div className="contract">
                            <p>{shop.contract}</p>
                        </div></Col>
                    </Row>
                </Container>

            ))}

            {/* // <div className="cardd">
            //     <div className="store-logo">
            //         <img
            //             src={`/images/${shop.s_pic}`}
            //             alt={shop.s_name}
            //             // className="shop-logo"
            //         />
            //     </div>

            //     <div className="store-info">
            //         <h2 className="shop-title text-primary">{shop.s_name}</h2>
            //         <p className="shop-description">{shop.description}</p>
            //     </div>
            //     <div className="contract">
            //         <p>{shop.contract}</p>
            //     </div>
            // </div> */}


            <div>
                <h2 className='header1'>สินค้าทั้งหมด</h2>
            </div>
            <div className='pd'>
                {products.map((product) => (
                    <div key={product.p_id} className="product">
                        <Link to={`/item/${product.p_id}`} key={product.p_id} style={{ textDecoration: 'none' }}>
                            <img src={`/images/${product.pic}`} alt={product.p_name} className="product-image" />
                            <div className="product-name">{product.p_name}</div>
                            <div className="product-price">{product.price} ฿</div>
                        </Link>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
}

export default ShopPage;
