// ECMAScript 2015
// you can create a class with a constructor and methods like this:

'use strict'

class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    };
    complete() {
        console.log('completing task: ' + this.name);
        this.completed = true;   
    };
    save() {
        console.log('saving Task: ' + this.name);
    };
};


var task1 = new Task('create a demo');
var task2 = new Task('eat a cake');
var task3 = new Task('go to gym');
var task4 = new Task('take a shit');


task1.complete();
task2.save();
task3.save();
task4.save();