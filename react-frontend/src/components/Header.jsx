import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ activePage }) => {
    return (
        <header>
            <Link to="/" className="logo">
                <img src="/image.png" alt="Logo" />
                Fitness <span>Fever</span>
            </Link>

            <nav className="navbar">
                <Link to="/" className={activePage === 'home' ? 'active' : ''}>Home</Link>
                <Link to="/about" className={activePage === 'about' ? 'active' : ''}>About Us</Link>
                <Link to="/services" className={activePage === 'services' ? 'active' : ''}>Services</Link>
                <Link to="/blog" className={activePage === 'blog' ? 'active' : ''}>Blog</Link>
                <Link to="/testimony" className={activePage === 'testimony' ? 'active' : ''}>Testimony</Link>
                <Link to="/contact" className={activePage === 'contact' ? 'active' : ''}>Contact</Link>
            </nav>

            <a href="https://wa.me/919820555607?text=Hello%20I%20am%20interested" className="btn nav-btn" target="_blank" rel="noopener noreferrer">GET STARTED</a>
            <div className="menu-toggle" id="menuToggle">
                <i className="fa-solid fa-bars"></i>
            </div>
        </header>
    );
};

export default Header;
