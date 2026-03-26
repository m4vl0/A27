import React from 'react';

const Hero = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <h1 className="home__title">A27FC 2025</h1>
          <p className="home__description">CLUB DE FÚTBOL 7 SENIOR +30.</p>
          <p className="home__description">FUNDADO EN 2017. 8 AÑOS DE HISTORIA.</p>

          <a href="#about" className="button">PROXIMO PARTIDO</a>

          <img src="src/assets/img/home-BALL.png" alt="futbol ball" className="home__sticker-1" />
        </div>

        <div className="home__images">
          <img src="src/assets/img/home-escudo.png" alt="escudo atletico 27" className="home__pizza" />
        </div>
      </div>
    </section>
  );
};

export default Hero;