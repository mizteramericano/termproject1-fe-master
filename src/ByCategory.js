import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './App.css';
// import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Nav from './component/Nav';
import './component/stylesheet/shopdes.css';
import './component/stylesheet/shopproduct.css';


function ShopPage() {
    const { catId } = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        if (!catId) {
            console.error("catId is undefined");
            navigate('/');
            return;
        }

        async function fetchProducts() {
            try {
                const response = await fetch(`http://localhost:8080/cate/${catId}`);
                if (!response.ok) throw new Error("Network response was not ok");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();

    }, [catId, navigate]);

    const categoryName = {
        1: "Makeup",
        2: "Skincare",
        3: "Haircare",
    };

    const displayCategory = categoryName[catId] || "Unknown Category";

    if (loading) return <p>Loading products...</p>;

    return (
        <div className='body'>
            {/* <Navbar /> */}
            <Nav />
            <div className='pad'>
                <h1 className='header1'>{displayCategory}</h1>
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
            <Footer />
        </div>
    );
}

export default ShopPage;
