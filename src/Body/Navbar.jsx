import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './styles/navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="nav-logo-and-links">
        <div className="nav-links-logo">
          <img
            src="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-black.png"
            alt="slack-logo"
          />
          <ul className="navbar-nav-links">
            <li>Product</li>
            <li>Enterprise</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>

      <div className="nav-buttons">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        {/* <input type="search" placeholder="Search..." /> */}
        <button className="sign-in-btn">Signin</button>
        <div>
          <button className="secondary-btn">Talk to Sales</button>
          <button className="primary-btn">Try for Free</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
