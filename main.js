var Task = require('./task');
var Repo = require('./taskRepository');

var task1 = new Task(Repo.get(1)); // now creating a new task and pulling it from the database with the Repo taskrepository

var task2 = new Task({name: 'eat a cake'});
var task3 = new Task({name: 'go to gym'});
var task4 = new Task({name: 'take a shit'});


task1.complete();
task2.save();
task3.save();
task4.save();