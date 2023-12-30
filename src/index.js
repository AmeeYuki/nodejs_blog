const express = require("express");
const path = require("path");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

const app = express();
const port = 3000;

//Use public folder
app.use(express.static(path.join(__dirname, "public")));

//Use middleware

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//HTTP log
// app.use(morgan("combined"));

//Template
app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "resources/views"));
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.post("/search", (req, res) => {
  console.log(req.body);
  res.send("");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
