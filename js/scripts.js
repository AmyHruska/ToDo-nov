// Business Logic for To-do
function ToDo() {
    this.tasks = {}
    this.currentId = 0;
}

ToDo.prototype.addTask = function(task) {
    task.id = this.assignId();
    this.tasks[task.id] = task;
}

ToDo.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
}

ToDo.prototype.findTask = function(id) {
    if (this.tasks[id] !== undefined) {
    return this.tasks[id];
    }
    return false;
}

ToDo.prototype.deleteTask = function(id) {
    if (this.tasks[id] === undefined) {
        return false;
    }
    delete this.tasks[id];
    return true;
}

ToDo.prototype.completeTask = function(id) {
    if (this.tasks[id] === undefined) {
        return false;
    }
    this.tasks[id].isComplete = true;
    return true;
}

// Business Logic for tasks
function Task(title, isComplete){
    this.title = title;
    this.isComplete = isComplete; //default value is to be false
}


 /* AddressBook.prototype.addContact = function (contact) {
    contact.id = this.assignId();
    this.contacts[contact.id] = contact;
  };*/

