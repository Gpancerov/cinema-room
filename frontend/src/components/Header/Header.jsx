import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">

      <div className="header__logo">
        Cinema Room
      </div>

      <nav className="header__nav">

        <a href="#about" className="header__link">
          О комнате
        </a>

        <a href="#gallery" className="header__link">
          Галерея
        </a>

        <a href="#booking" className="header__link">
          Бронирование
        </a>

      </nav>

    </header>
  );
}

export default Header;