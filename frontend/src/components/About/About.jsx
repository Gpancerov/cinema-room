import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">

      <h1 className="about__title">
        Комната с домашним кинотеатром
      </h1>

      <p className="about__text">
        Уютная комната в центре Москвы с большим экраном,
        профессиональной акустикой и мягкими креслами.
        Отличное место для просмотра фильмов с друзьями.
      </p>

      <a href="#booking" className="about__button">
        Забронировать
      </a>

    </section>
  );
}

export default About;