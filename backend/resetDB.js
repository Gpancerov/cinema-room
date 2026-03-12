// backend/resetDB.js
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./booking.db', (err) => {
  if (err) console.error(err.message);
  else console.log('Connected to SQLite database');
});

// Удаляем все записи из таблицы bookings
db.run('DELETE FROM bookings', function(err) {
  if (err) console.error(err.message);
  else console.log(`All ${this.changes} bookings deleted`);
});

// Закрываем базу
db.close();