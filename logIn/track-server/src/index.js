require("./models/User");
require("./models/Track");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");
const requireAuth = require("./middleWare/requireAuth");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri =
  "mongodb+srv://usman:Admin321@cluster0.s2iblwa.mongodb.net/?retryWrites=true&w=majority";
//mongodb+srv://usman:<password>@cluster0.s2iblwa.mongodb.net/?retryWrites=true&w=majority
mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("not connected");
    console.log(err);
  });

// mongoose.connect("connected", () => {
//   console.log("conneted to mongo");
// });
// mongoose.connect("error", (err) => {
//   console.log("error");
// });

app.get("/", requireAuth, (req, res) => {
  res.send(`Your  email: ${req.user.email}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
