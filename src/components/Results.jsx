import React, { useEffect } from 'react';

const Results = () => {
  useEffect(() => {
    // Initialize Swiper
    if (typeof Swiper !== 'undefined') {
      new Swiper('.popular__swiper', {
        loop: true,
        grabCursor: true,
        slidesPerView: 'auto',
        centeredSlides: 'auto',
      });
    }
  }, []);

  return (
    <>
      <section className="popular section" id="popular">
        <div className="popular__container container grid">
          <div className="popular__data">
            <h2 className="section__title">RESULTADOS</h2>
            <p className="popular__description">
              Aquí encontrarás los resultados de nuestros encuentros más recientes en la liga.
            </p>  
          </div>

          <div className="popular__swiper swiper">
            <div className="swiper-wrapper">
              <article className="popular__card swiper-slide">
                <img src="src/assets/img/home-escudo vs.png" alt="resultado" className="popular__img" />
                <h3 className="popular__title">ATLETICO (6) VS (7) RIVAL A </h3>
              </article>

              <article className="popular__card swiper-slide">
                <img src="src/assets/img/home-escudo vs.png" alt="resultado" className="popular__img" />
                <h3 className="popular__title">ATLETICO VS RIVAL B </h3>
              </article>

              <article className="popular__card swiper-slide">
                <img src="src/assets/img/home-escudo vs.png" alt="resultado" className="popular__img" />
                <h3 className="popular__title">ATLETICO VS RIVAL C </h3>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="recipe section">
        <h2 className="section__title">PRÓXIMOS PARTIDOS</h2>

        <div className="popular__swiper swiper">
          <div className="swiper-wrapper">
            <article className="popular__card swiper-slide">
              <img src="src/assets/img/home-escudo vs.png" alt="fixture" className="popular__img" />
              <h3 className="popular__title">ATLETICO VS EQUIPO A </h3>
            </article>

            <article className="popular__card swiper-slide">
              <img src="src/assets/img/home-escudo vs.png" alt="fixture" className="popular__img" />
              <h3 className="popular__title">ATLETICO VS EQUIPO B </h3>
            </article>

            <article className="popular__card swiper-slide">
              <img src="src/assets/img/home-escudo vs.png" alt="fixture" className="popular__img" />
              <h3 className="popular__title">ATLETICO VS EQUIPO C </h3>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Results;
