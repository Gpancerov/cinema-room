import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">

      <div className="hero__content">

        <h1 className="hero__title">
          Комната с домашним кинотеатром
        </h1>

        <p className="hero__subtitle">
          Уютное место в центре Москвы для просмотра фильмов
          с друзьями и близкими
        </p>

        <a href="#booking" className="hero__button">
          Забронировать
        </a>

      </div>

    </section>
  );
}

export default Hero;