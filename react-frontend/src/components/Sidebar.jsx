import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ activePage }) => {
    return (
        <div className="sidebar-slide" id="sidebarMenu">
            <div className="sidebar-header">
                <Link to="/" className="logo">
                    <img src="/image.png" alt="Logo" />
                    Fitness <span>Fever</span>
                </Link>
                <i className="fa-solid fa-xmark" id="closeMenu"></i>
            </div>

            <Link to="/" className={`sidebar-link ${activePage === 'home' ? 'active' : ''}`}>
                <i className="fa-solid fa-house"></i>
                <span>Home</span>
            </Link>
            <Link to="/about" className={`sidebar-link ${activePage === 'about' ? 'active' : ''}`}>
                <i className="fa-solid fa-users"></i>
                <span>About Us</span>
            </Link>
            <Link to="/services" className={`sidebar-link ${activePage === 'services' ? 'active' : ''}`}>
                <i className="fa-solid fa-hand-holding-heart"></i>
                <span>Services</span>
            </Link>
            <Link to="/blog" className={`sidebar-link ${activePage === 'blog' ? 'active' : ''}`}>
                <i className="fa-solid fa-newspaper"></i>
                <span>Blog</span>
            </Link>
            <Link to="/testimony" className={`sidebar-link ${activePage === 'testimony' ? 'active' : ''}`}>
                <i className="fa-solid fa-comment-dots"></i>
                <span>Testimony</span>
            </Link>
            <Link to="/contact" className={`sidebar-link ${activePage === 'contact' ? 'active' : ''}`}>
                <i className="fa-solid fa-phone"></i>
                <span>Contact</span>
            </Link>

            <a href="https://wa.me/919833143308?text=Hello%20I%20am%20interested" className="sidebar-cta">
                <i className="fa-solid fa-arrow-right-to-bracket"></i>
                Join Today!
            </a>
        </div>
    );
};

export default Sidebar;
