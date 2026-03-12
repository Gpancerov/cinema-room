import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { createBooking, getAvailableDates } from '../../services/ApiService';
import './BookingForm.css';

export default function BookingForm() {
  const [email, setEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [message, setMessage] = useState('');
  const [bookedDates, setBookedDates] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);

  // Получаем все брони с сервера
  const fetchBookedDates = async () => {
    try {
      const res = await fetch('http://localhost:5000/bookings');
      const data = await res.json();
      const booked = data.map(b => b.date); // ["2026-03-10", ...]
      setBookedDates(booked);
    } catch (err) {
      console.error(err);
    }
  };

  // Получаем свободные даты
  const fetchAvailableDates = async () => {
    try {
      const free = await getAvailableDates();
      setAvailableDates(free); // ["2026-03-12", ...]
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBookedDates();
    fetchAvailableDates();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate) return;

    const dateStr = selectedDate.toISOString().split('T')[0];

    if (bookedDates.includes(dateStr)) {
      setMessage('Эта дата уже занята');
      return;
    }

    try {
      const res = await createBooking(dateStr, email);
      if (res.error) {
        setMessage(res.error);
      } else {
        setMessage('Вы успешно забронировались!');
        setSelectedDate(null);
        setEmail('');
        await fetchBookedDates();
        await fetchAvailableDates();
      }
    } catch (err) {
      console.error(err);
      setMessage('Ошибка при создании брони');
    }
  };

  // Подсветка календаря
  const highlightWithRanges = (date) => {
    const dateStr = date.toISOString().split('T')[0];
    if (bookedDates.includes(dateStr)) return 'booked-date';
    if (availableDates.includes(dateStr)) return 'available-date';
    return null;
  };

  const filterAvailableDates = (date) => date >= new Date();

  const navButtonStyle = {
    background: 'none',
    border: 'none',
    color: '#007BFF',
    fontSize: '16px',
    cursor: 'pointer',
    margin: '0 5px'
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Забронировать комнату</h2>

      <input
        type="email"
        placeholder="Ваш Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dayClassName={highlightWithRanges}
        filterDate={filterAvailableDates}
        placeholderText="Выберите дату"
        dateFormat="yyyy-MM-dd"
        minDate={new Date()}
        showDisabledMonthNavigation
        showPopperArrow={false}
        todayButton={null}
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled
        }) => (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled} style={navButtonStyle}>&lt;</button>
            <span style={{ margin: '0 10px', fontWeight: 'bold', fontSize: '16px' }}>
              {date.toLocaleString('ru-RU', { month: 'long', year: 'numeric' })}
            </span>
            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled} style={navButtonStyle}>&gt;</button>
          </div>
        )}
      />

      <button type="submit">Забронировать</button>

      <p className={message.includes('занята') ? 'text-warning' : 'text-success'}>
        {message}
      </p>
    </form>
  );
}