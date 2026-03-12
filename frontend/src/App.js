import React from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Advantages from './components/Advantages/Advantages';
import Features from './components/Features/Features';
import Gallery from './components/Gallery/Gallery';
import Reviews from './components/Reviews/Reviews';
import BookingForm from './components/BookingForm/BookingForm';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="site">

      {/* HEADER */}
      <Header />

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <div className="fade-in">
        <About />
      </div>

      {/* ADVANTAGES */}
      <div className="fade-in">
        <Advantages />
      </div>

      {/* FEATURES */}
      <div className="fade-in">
        <Features />
      </div>

      {/* GALLERY */}
      <div className="fade-in">
        <Gallery />
      </div>

      {/* REVIEWS */}
      <div className="fade-in">
        <Reviews />
      </div>

      {/* BOOKING */}
      <section id="booking" className="fade-in">
        <BookingForm />
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;