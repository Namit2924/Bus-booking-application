const db = require("../config/db");

exports.bookSeat = (req, res) => {
  const { busId, passengerName, seatsBooked } = req.body;

  const sql = "INSERT INTO bookings (bus_id, passenger_name, seats_booked) VALUES (?, ?, ?)";

  db.query(sql, [busId, passengerName, seatsBooked], (err) => {
    if (err) throw err;
    res.send("Booking Successful!");
  });
};