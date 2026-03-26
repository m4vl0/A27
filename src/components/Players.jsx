import React, { useState, useEffect } from 'react';

const Players = () => {
  const [data, setData] = useState({ coach: null, players: [] });

  useEffect(() => {
    const loadPlayers = async () => {
      try {
        const response = await fetch('data.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error cargando jugadores:', error);
      }
    };

    loadPlayers();
  }, []);

  return (
    <section className="players section" id="players">
      <h2 className="section__title text-center mb-12">PLANTEL <br /> 2025</h2>

      <div className="players__container container grid" id="players-container">
        {data.coach && (
          <article className="players__card coach__card">
            <img src={data.coach.img} alt={data.coach.name} className="players__img" />
            <h3 className="players__name">{data.coach.name} <br /> {data.coach.position}</h3>
            <span className="players__price">DT</span>
            <button className="players__button">
              <i className="ri-clipboard-line"></i>
            </button>
          </article>
        )}

        {data.players.map((player, index) => (
          <article className="players__card" key={index}>
            <img src={player.img} alt={player.name} className="players__img" />
            <h3 className="players__name">{player.name} <br /> {player.position}</h3>
            <span className="players__price">{player.number}</span>
            <button className="players__button">
              <i className="ri-shield-user-line"></i>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Players;