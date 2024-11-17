import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './stylesheet/navbar.css'; // Include your CSS file

const Navbar = () => {
  const [skincareData, setSkincareData] = useState([]);
  const [makeupData, setMakeupData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch Skincare data from API
  useEffect(() => {
    fetch('https://api.example.com/skincare') // Replace with your skincare API endpoint
      .then(response => response.json())
      .then(data => setSkincareData(data))
      .catch(error => console.error('Error fetching skincare data:', error));
  }, []);

  // Fetch Makeup data from API
  useEffect(() => {
    fetch('https://api.example.com/makeup') // Replace with your makeup API endpoint
      .then(response => response.json())
      .then(data => setMakeupData(data))
      .catch(error => console.error('Error fetching makeup data:', error));
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search button click
  const handleSearchClick = () => {
    // Implement search functionality here
    console.log('Search query:', searchQuery);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to={`/`} key="#">
        <img src="/images/logo-removebg-preview.png" alt="Logo" className="logo" /> {/* Store logo */}
        </Link>
        <div className="navbar-content">
          <div className="navbar-logo">BuildSkin</div> {/* Store name */}
          <ul className="navbar-menu">
            <li>
              <a href="#skincare">
                Skincare ({skincareData.length}) {/* Display number of skincare items */}
              </a>
            </li>
            <li>
              <a href="#makeup">
                Makeup ({makeupData.length}) {/* Display number of makeup items */}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange} // Update search query state
        />
        <button onClick={handleSearchClick}>🔍</button> {/* Search button */}
      </div>
    </nav>
  );
};

export default Navbar;
