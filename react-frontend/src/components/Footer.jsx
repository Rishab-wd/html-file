import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-box">
                    <Link to="/" className="logo">
                        <img src="/image.png" alt="Logo" />
                        Fitness <span>Fever</span>
                    </Link>
                    <p>Your journey to fitness starts here. We are committed to health, excellence, and community.</p>
                    <div className="social-links">
                        <a href="https://www.instagram.com/fitnessfevergym?igsh=MTZianBvNGZpcHQ5Zw==" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>

                <div className="footer-box">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Our Services</Link></li>
                    </ul>
                </div>

                <div className="footer-box">
                    <h3>Contact Info</h3>
                    <ul>
                        <li>
                            <a href="https://maps.app.goo.gl/XhLPPfWtBn69pWQ76" target="_blank" rel="noopener noreferrer">
                                <i className="fa-solid fa-location-dot"></i> Bhayandar </a>
                        </li>
                        <li>
                            <a href="https://maps.app.goo.gl/SAVxafPAL7qdrtyg6" target="_blank" rel="noopener noreferrer">
                                <i className="fa-solid fa-location-dot"></i> Borivali </a>
                        </li>
                        <li>
                            <a href="https://maps.app.goo.gl/RN9WdbBnuoLrmWRa7" target="_blank" rel="noopener noreferrer">
                                <i className="fa-solid fa-location-dot"></i> Mira Road </a>
                        </li>
                        <li><a href="https://wa.me/919820555607?text=Hello%20I%20am%20interested"><i className="fa-solid fa-phone"></i> +91 9820555607</a></li>
                    </ul>
                </div>
            </footer>

            <div className="copyright">
                &copy; 2026 Fitness Fever. All Rights Reserved.
            </div>
        </>
    );
};

export default Footer;
