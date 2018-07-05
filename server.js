var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requiring our models for syncing
var db = require("./models");


// Import routes and give the server access to them.
var routes = require("./controllers/burger_controller.js");
app.use(routes);

// Start our server so that it can begin listening to client requests.
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
});

//Start listen for requests
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
