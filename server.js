var express = require('express'),
	methodOverride = require('method-override'),
	bodyParser = require('body-parser'),
	models = require('./models/burger.js'),
	exphbs = require("express-handlebars");

const PORT = 3000;

var app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/burgers_controller.js")(app);

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function(){
	console.log('Listening on port:', PORT);
});

