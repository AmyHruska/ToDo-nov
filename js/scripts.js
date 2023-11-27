// Business Logic for To-do
function ToDo() {
    this.tasks = {}
    this.currentId = 0;
}

ToDo.prototype.addTask = function(task) {
    task.id = this.assignId();
    this.task[task.id] = task;
}

ToDo.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
}

// Business Logic for tasks
function Task(title, isComplete){
    this.title = title;
    this.isComplete = isComplete;
}


 /* AddressBook.prototype.addContact = function (contact) {
    contact.id = this.assignId();
    this.contacts[contact.id] = contact;
  };*/