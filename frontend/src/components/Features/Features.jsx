import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features">

      <h2 className="features__title">
        Удобства
      </h2>

      <div className="features__grid">

        <div className="features__item">
          🎬
          <p>Большой экран</p>
        </div>

        <div className="features__item">
          🔊
          <p>Мощная акустика</p>
        </div>

        <div className="features__item">
          🛋
          <p>Мягкие кресла</p>
        </div>

        <div className="features__item">
          🍿
          <p>Попкорн зона</p>
        </div>

      </div>

    </section>
  );
}

export default Features;