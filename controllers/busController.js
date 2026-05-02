const db = require("../config/db");

exports.getBuses = (req, res) => {
  db.query("SELECT * FROM buses", (err, results) => {
    if (err) throw err;
    res.render("buses", { buses: results });
  });
};

exports.addBus = (req, res) => {
  const { name, from, to, seats } = req.body;

  const sql = "INSERT INTO buses (name, source, destination, seats) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, from, to, seats], (err) => {
    if (err) throw err;
    res.redirect("/buses");
  });
};