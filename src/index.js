const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const db = require('./config/db');

//Connect DB
db.connect();

const app = express();
const port = 3000;

//Use Route
const route = require('./routes');

//Use public folder
app.use(express.static(path.join(__dirname, 'public')));

//Use middleware

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

//HTTP log
// app.use(morgan("combined"));

//Template
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources','views'));

//Route inits
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
