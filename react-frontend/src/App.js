import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Testimony from './pages/Testimony';
import Contact from './pages/Contact';

function AppContent() {
  const location = useLocation();
  
  // Determine active page based on current route
  const getActivePage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/about') return 'about';
    if (path === '/services') return 'services';
    if (path === '/blog') return 'blog';
    if (path === '/testimony') return 'testimony';
    if (path === '/contact') return 'contact';
    return 'home';
  };

  useEffect(() => {
    // Sidebar functionality
    const menuToggle = document.getElementById('menuToggle');
    const sidebarMenu = document.getElementById('sidebarMenu');
    const closeMenu = document.getElementById('closeMenu');

    // Open the menu when the toggle button is clicked
    const handleMenuToggle = () => {
      sidebarMenu.classList.add('open');
    };

    // Close the menu when the close icon is clicked
    const handleCloseMenu = () => {
      sidebarMenu.classList.remove('open');
    };

    // Close menu when any link is clicked (for seamless navigation)
    const handleSidebarLinkClick = () => {
      setTimeout(() => {
        sidebarMenu.classList.remove('open');
      }, 300);
    };

    if (menuToggle) {
      menuToggle.addEventListener('click', handleMenuToggle);
    }

    if (closeMenu) {
      closeMenu.addEventListener('click', handleCloseMenu);
    }

    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
      link.addEventListener('click', handleSidebarLinkClick);
    });

    // Cleanup event listeners
    return () => {
      if (menuToggle) {
        menuToggle.removeEventListener('click', handleMenuToggle);
      }
      if (closeMenu) {
        closeMenu.removeEventListener('click', handleCloseMenu);
      }
      sidebarLinks.forEach(link => {
        link.removeEventListener('click', handleSidebarLinkClick);
      });
    };
  }, [location]);

  const activePage = getActivePage();

  return (
    <>
      <Sidebar activePage={activePage} />
      <Header activePage={activePage} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimony" element={<Testimony />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
