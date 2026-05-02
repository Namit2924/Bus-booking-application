const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "bus-db.cbgaige0c4rq.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "admin123",
  database: "busDB",
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.log("RDS Connection Failed:", err);
  } else {
    console.log("Connected to RDS MySQL");
  }
});

module.exports = db;