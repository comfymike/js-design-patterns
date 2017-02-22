//Module Pattern

// does our data base calls
var repo = function() {
    
    var db = {};
    
    var get = function(id) {  
        // simulates calling to db ange getting task
        console.log('Getting task ' + id);
        return {
            name: 'new task from db'
        }
    };
    
    var save = function(task) {
        console.log('Saving '  + task.name + ' to db');
    };
 
    
    return {
        get: get,
        save: save     
    };
    
};

module.exports = repo();