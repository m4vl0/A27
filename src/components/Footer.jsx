import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 350) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <a href="#" className="footer__logo">ATLETICO 27</a>

        <div className="footer__content grid">
          <div>
            <h3 className="footer__title">Siguenos</h3>
            <div className="footer__social">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="footer__social-link">
                <i className="ri-facebook-circle-fill"></i>
              </a>
              <a href="https://www.instagram.com/atletico27f.c/" target="_blank" rel="noreferrer" className="footer__social-link">
                <i className="ri-instagram-fill"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="footer__social-link">
                <i className="ri-twitter-x-fill"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer__title">Sponsors</h3>
            <div className="footer__pay">
              <p>Apoyando al deporte de barrio.</p>
            </div>
          </div>

          <div>
            <h3 className="footer__title">Suscríbete</h3>
            <form action="#" className="footer__form">
              <input type="email" placeholder="Tu Email" className="footer__input" />
              <button type="submit" className="footer__button button">Enviar</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer__policy">
        <a href="#" className="footer__link">Términos y Condiciones</a>
        <a href="#" className="footer__link">Privacidad</a>
      </div>

      <span className="footer__copy">
        &#169; 2025 Atlético 27 F.C. Todos los derechos reservados.
      </span>

      <a href="#" className={`scrollup ${showScroll ? 'show-scroll' : ''}`} id="scroll-up">
        <i className="ri-arrow-up-line"></i>
      </a>
    </footer>
  );
};

export default Footer;
