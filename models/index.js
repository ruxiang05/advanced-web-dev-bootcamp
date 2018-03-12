const mongoose = require("mongoose");

mongoose.set('debug', true);
mongoose.connect('mongodb://127.0.0.1/todo-api');

mongoose.Promise = Promise; //enabled promises

module.exports.Todo = require("./todo");