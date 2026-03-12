const API_URL = 'http://localhost:5000';

export const getAvailableDates = async () => {
  const res = await fetch(`${API_URL}/available-dates`);
  return res.json();
};

export const createBooking = async (date, email) => {
  const res = await fetch(`${API_URL}/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ date, userEmail: email }),
  });
  return res.json();
};