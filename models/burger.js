var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var burger = sequelize.define('burger', {
	
	burger_name: Sequelize.STRING,
	devoured: {
		type: Sequelize.BOOLEAN,
		defaultValue: false
		}
});

burger.sync();

module.exports = burger;