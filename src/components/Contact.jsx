import React from 'react';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="section__title">Contacto</h3>

          <div className="contact__info grid">
            <div>
              <h3 className="contact__title">Redes Sociales</h3>
              <div className="contact__social">
                <a href="https://api.whatsapp.com/send?phone=51123456789&text=Hola, solicito información." target="_blank" rel="noreferrer" className="contact__social-link">
                  <i className="ri-whatsapp-fill"></i>
                </a>
                <a href="https://m.me/bedimcode" target="_blank" rel="noreferrer" className="contact__social-link">
                  <i className="ri-messenger-fill"></i>
                </a>
                <a href="https://t.me/telegram" target="_blank" rel="noreferrer" className="contact__social-link">
                  <i className="ri-telegram-2-fill"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="contact__title">Sede Oficial</h3>
              <address className="contact__address">
                La Florida, Santiago <br />
                Chile
              </address>
            </div>

            <div>
              <h3 className="contact__title">Ubicación</h3>
              <address className="contact__address">
                Complejo Deportivo Local
              </address>
              <a href="https://maps.app.goo.gl/qhZkXnFqFWeR6WN78" target="_blank" rel="noreferrer" className="contact__map">
                <i className="ri-map-pin-fill"></i>
                <span>Ver en mapa</span>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__image">
          <img src="src/assets/img/contact-img.png" alt="contacto club" className="contact__img" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
