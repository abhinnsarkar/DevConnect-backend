const express = require("express");
const connectDB = require("./config/db");
// const path = require("path");
require("dotenv").config();

const app = express();

connectDB();

// init middleware
app.use(express.json({ extended: false }));

// define routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/users", require("./routes/api/users"));

// // serve static assests in production
// if (process.env.NODE_ENV === "production") {
//   // set static folder
//   app.use(express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));