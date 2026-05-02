const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
app.use("/", require("./routes/busRoutes"));
app.use("/", require("./routes/bookingRoutes"));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));