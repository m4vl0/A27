import React, { useState, useEffect } from 'react';

const MatchCenter = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const getNextTuesday = () => {
      const now = new Date();
      const target = new Date(now);
      
      // Tuesday is 2
      let daysUntilTuesday = (2 - now.getDay() + 7) % 7;
      
      // If today is Tuesday and it's already past 21:00, move to next week
      if (daysUntilTuesday === 0 && now.getHours() >= 21) {
        daysUntilTuesday = 7;
      }
      
      target.setDate(now.getDate() + daysUntilTuesday);
      target.setHours(21, 0, 0, 0);
      
      return target.getTime();
    };

    const targetDate = getNextTuesday();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        // This might happen briefly before next Tuesday is calculated on refresh
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="match-center section" id="match-center">
      <div className="match-center__container container grid">
        <div className="match-center__data">
          <h2 className="section__title">MATCH CENTER</h2>
          <p className="match-center__description">
            Próximos partidos: <b>Todos los martes a las 21:00</b>.
          </p>
        </div>

        <div className="match-center__content">
          <div className="match-center__match-info">
            <div className="match-center__teams">
              <div className="match-center__team">
                <img src="src/assets/img/home-escudo.png" alt="ATLETICO 27" className="match-center__team-img" />
                <span className="match-center__team-name">ATLETICO 27</span>
              </div>
              <div className="match-center__vs">
                <span>VS</span>
              </div>
              <div className="match-center__team">
                <img src="src/assets/img/home-escudo vs.png" alt="Rival" className="match-center__team-img" />
                <span className="match-center__team-name">POR DEFINIR</span>
              </div>
            </div>

            <div className="match-center__details">
              <p className="match-center__competition">Liga F7 Senior</p>
              <p className="match-center__location"><i className="ri-map-pin-line"></i> Estadio Municipal</p>
              <p className="match-center__date"><i className="ri-time-line"></i> Próximo Martes, 21:00</p>
            </div>
          </div>

          <div className="match-center__countdown">
            <div className="countdown__item">
              <span className="countdown__number">{timeLeft.days}</span>
              <span className="countdown__text">Días</span>
            </div>
            <div className="countdown__item">
              <span className="countdown__number">{timeLeft.hours}</span>
              <span className="countdown__text">Horas</span>
            </div>
            <div className="countdown__item">
              <span className="countdown__number">{timeLeft.minutes}</span>
              <span className="countdown__text">Minutos</span>
            </div>
            <div className="countdown__item">
              <span className="countdown__number">{timeLeft.seconds}</span>
              <span className="countdown__text">Segundos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchCenter;
