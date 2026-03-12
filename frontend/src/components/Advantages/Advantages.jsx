import React from 'react';
import './Advantages.css';

function Advantages() {
  return (
    <section className="advantages">

      <h2 className="advantages__title">
        Почему выбирают нас
      </h2>

      <div className="advantages__grid">

        <div className="advantages__card">
          <h3 className="advantages__card-title">
            Приватная атмосфера
          </h3>
          <p>
            Вы арендуете комнату полностью для себя.
            Никаких посторонних людей — только вы
            и ваши друзья.
          </p>
        </div>

        <div className="advantages__card">
          <h3 className="advantages__card-title">
            Профессиональное оборудование
          </h3>
          <p>
            Большой экран, качественная акустика
            и удобные кресла создают настоящий
            эффект кинотеатра.
          </p>
        </div>

        <div className="advantages__card">
          <h3 className="advantages__card-title">
            Центр города
          </h3>
          <p>
            Комната расположена в центре Москвы,
            поэтому до нас легко добраться из
            любой части города.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Advantages;