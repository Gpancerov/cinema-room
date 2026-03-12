const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Подключение к базе
const db = new sqlite3.Database('./booking.db', (err) => {
  if (err) console.error(err.message);
  else console.log('Connected to SQLite database');
});

// Создаем таблицу бронирований
db.run(`
  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL UNIQUE,
    userEmail TEXT NOT NULL,
    status TEXT NOT NULL
  )
`);

// Три дня в неделю для марта
const availableDays = ["2026-03-10", "2026-03-12", "2026-03-14"];

// GET /bookings — все брони
app.get('/bookings', (req, res) => {
  db.all('SELECT * FROM bookings', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    // отправляем даты как есть, строки "yyyy-MM-dd"
    res.json(rows);
  });
});

// GET /available-dates — свободные даты
app.get('/available-dates', (req, res) => {
  db.all('SELECT date FROM bookings', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    const bookedDates = rows.map(r => r.date);
    const freeDates = availableDays.filter(d => !bookedDates.includes(d));
    res.json(freeDates);
  });
});

// POST /bookings — создать бронь
app.post('/bookings', (req, res) => {
  const { date, userEmail } = req.body;
  const stmt = db.prepare('INSERT INTO bookings(date, userEmail, status) VALUES (?, ?, ?)');
  stmt.run(date, userEmail, 'booked', function(err) {
    if (err) return res.json({ error: 'Дата уже занята или ошибка базы данных' });
    res.json({ success: true, id: this.lastID });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});