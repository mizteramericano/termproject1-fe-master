import React from 'react';
import './stylesheet/footer.css'; // สไตล์ CSS สำหรับ Footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>เกี่ยวกับเรา</h4>
          <p>เราเป็นเว็บไซต์ที่จำหน่ายเครื่องสำอางค์และสกินแคร์จากแบรนด์ชั้นนำในประเทศไทย
            เพื่อให้ลูกค้าได้เลือกสรรสินค้า ที่เหมาะสม และ ราคาดี
          </p>
        </div>
        <div className="footer-section">
          <h4>ติดต่อเรา</h4>
          <ul>
            <li>โทรศัพท์: 123-456-7890</li>
            <li>อีเมล: support@yourshop.com</li>
            <li>ที่อยู่: ถนน กอไก่ กรุงเตพ, ประเทศไทย</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>ติดตามเรา</h4>
          <ul>
            <li><a href="https://www.facebook.com">Facebook</a></li>
            <li><a href="https://www.instagram.com">Instagram</a></li>
            <li><a href="https://www.twitter.com">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 YourShop. สงวนลิขสิทธิ์.</p>
      </div>
    </footer>
  );
};

export default Footer;