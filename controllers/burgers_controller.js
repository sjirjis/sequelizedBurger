var express = require('express'),
    burger = require('../models/burger.js'),
    Sequelize = require("sequelize");

module.exports = function(app) {

    app.get('/index', function(req, res) {
        burger.findAll().then(function(dbBurger) {
            res.render('index', { burger: dbBurger });
        });
    });

    app.post('/index', function(req, res) {

        burger.create({
            burger_name: req.body.newBurger,
            devoured: false
        }).then(function() {
            res.end();
        });
    });

    app.put('/index', function(req, res) {
        burger.update(
            { devoured: true },
            { where:
                { id: req.body.eatenBurgerId } 
            }
        ).then(function() {
            res.end();
        })
    });
};
