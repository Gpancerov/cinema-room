import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">

      <div className="footer__container">

        {/* Контакты */}
        <div className="footer__contacts">
          <h3 className="footer__title">Контакты</h3>
          <p>Телефон: +7 (999) 123-45-67</p>
          <p>Email: info@cinemaroom.ru</p>
          <p>Адрес: г. Москва, ул. Кино, д. 10</p>
        </div>

        {/* Соцсети */}
        <div className="footer__social">
          <h3 className="footer__title">Мы в соцсетях</h3>
          <div className="footer__icons">
            <a href="#"><span role="img" aria-label="vk">Вконтакте</span></a>
            <a href="#"><span role="img" aria-label="instagram">Инстаграмм</span></a>
            <a href="#"><span role="img" aria-label="telegram">Телеграмм</span></a>
          </div>
        </div>

        {/* Карта */}
        <div className="footer__map">
          <h3 className="footer__title">Где мы</h3>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.836724356477!2d37.61763561604892!3d55.75582698055305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab6d0b2e7d727%3A0xc6f3dbe2f54a7f30!2z0JrQu9C10YHQutC40Lkg0JrQu9C10YHRg9C90L7Qs9C-LCDQnNC-0YHQv9C-0LLQuNGP!5e0!3m2!1sru!2s!4v1622768825824!5m2!1sru!2s"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>

      <div className="footer__bottom">
        © 2026 CinemaRoom. Все права защищены.
      </div>

    </footer>
  );
}

export default Footer;