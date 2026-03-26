import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShadowHeader, setIsShadowHeader] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Shadow Header
      if (window.scrollY >= 50) {
        setIsShadowHeader(true);
      } else {
        setIsShadowHeader(false);
      }

      // Active Link
      const sections = document.querySelectorAll('section[id]');
      const scrollDown = window.scrollY;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isShadowHeader ? 'shadow-header' : ''}`} id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src="src/assets/img/logo-A27.png" alt="logo atletico 27" />
          ATLETICO 27 F.C.
        </a>

        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li>
              <a href="#home" className={`nav__link ${activeLink === 'home' ? 'active-link' : ''}`} onClick={closeMenu}>INICIO</a>
            </li>
            <li>
              <a href="#about" className={`nav__link ${activeLink === 'about' ? 'active-link' : ''}`} onClick={closeMenu}>EL CLUB</a>
            </li>
            <li>
              <a href="#players" className={`nav__link ${activeLink === 'players' ? 'active-link' : ''}`} onClick={closeMenu}>JUGADORES</a>
            </li>
            <li>
              <a href="#popular" className={`nav__link ${activeLink === 'popular' ? 'active-link' : ''}`} onClick={closeMenu}>RESULTADOS</a>
            </li>
            <li>
              <a href="#contact" className={`nav__link ${activeLink === 'contact' ? 'active-link' : ''}`} onClick={closeMenu}>CONTACTO</a>
            </li>
          </ul>

          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <i className="ri-close-large-line"></i>
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <i className="ri-apps-2-fill"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;