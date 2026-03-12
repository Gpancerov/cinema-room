import React from 'react';
import './Reviews.css';
import Anna from '../../assets/reviews/anna.jpg';
import Maxim from '../../assets/reviews/maxim.jpg';
import Ekaterina from '../../assets/reviews/ekaterina.jpg';

function Reviews() {
  const reviews = [
    {
      name: 'Анна',
      text: 'Отличное место! Смотрели фильм с друзьями, атмосфера как в настоящем кинотеатре.',
      avatar: Anna
    },
    {
      name: 'Максим',
      text: 'Очень удобные кресла и отличный звук. Обязательно придём ещё раз!',
      avatar: Maxim
    },
    {
      name: 'Екатерина',
      text: 'Бронировали для свидания — всё прошло идеально. Очень уютно.',
      avatar: Ekaterina
    }
  ];

  return (
    <section className="reviews">
      <h2 className="reviews__title">Отзывы клиентов</h2>

      <div className="reviews__grid">
        {reviews.map((r, index) => (
          <div key={index} className="reviews__card">
            <div className="reviews__avatar">
              <img src={r.avatar} alt={r.name} />
            </div>
            <p className="reviews__text">{r.text}</p>
            <p className="reviews__author">{r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;