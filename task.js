var Repo = require('./taskRepository');

// Task constructor (using prototypes)
// pass in name, so that when we create a new object with this constructor, we give it the name passed in

var Task = function(data) {
    this.name = data.name;
    this.completed = false;
};

Task.prototype.complete = function(arguments) {
    console.log('completing task: ' + this.name);
    this.completed = true;   
};

Task.prototype.save = function() {
    console.log('saving Task: ' + this.name);
    Repo.save(this); // this is the task
};

module.exports = Task;
