import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const images = [
    "https://i.siteapi.org/AwuQR1mtpK6tO9dI-z_gvprUbx4=/fit-in/900x1000/center/top/filters:format(png)/s2.siteapi.org/2f68456cbab7406/gallery/h6yed8vc3w8wwwo888s4sgc8g0c0kc",
    "https://i.siteapi.org/j-Z3N1Q9m6MhtCz7XBO8lVQoipE=/fit-in/900x1000/center/top/filters:format(png)/s2.siteapi.org/2f68456cbab7406/gallery/laf10m7ul4gs8w0k40wgg444gw4csg",
    "https://i.siteapi.org/ssehRrqTU3RmK6k9h6sEjA08HHc=/fit-in/900x1000/center/top/filters:format(png)/s2.siteapi.org/2f68456cbab7406/gallery/4m3tnof9dn28gc4ow80o4kwooc00oc"
  ];

  const [modalImage, setModalImage] = useState(null);

  const openModal = (src) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section id="gallery" className="gallery">

      <h2 className="gallery__title">
        Галерея
      </h2>

      <div className="gallery__grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`room ${index + 1}`}
            className="gallery__image"
            onClick={() => openModal(src)}
          />
        ))}
      </div>

      {/* Модальное окно */}
      {modalImage && (
        <div className="gallery__modal" onClick={closeModal}>
          <span className="gallery__close">&times;</span>
          <img src={modalImage} alt="room full" className="gallery__modal-image" />
        </div>
      )}

    </section>
  );
}

export default Gallery;