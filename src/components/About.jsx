import React from 'react';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__data">
          <h2 className="section__title">Atlético 27 F.C. <br /> PROXIMO PARTIDO</h2>

          <p className="about__description">
            Atlético 27 F.C. es un club de barrio originario del paradero 27 de la comuna de La Florida. 
            Un equipo de fútbol con identidad propia, nacido de la pasión por el deporte y el compromiso con el trabajo en equipo. 
            Desde su fundación, el club ha construido una reputación sólida gracias a su estilo de juego competitivo y su espíritu deportivo.
          </p>

          <a href="#popular" className="button"> RESULTADOS </a>
        </div>

        <img src="src/assets/img/Camiseta-img.png" alt="camiseta oficial" className="about__img" />
      </div>
    </section>
  );
};

export default About;
