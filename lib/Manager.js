const Employee = require('./Employee');
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
}
// Overrides position
getRole() {
    return "Manager";
}
};

// exports class
module.exports = Manager