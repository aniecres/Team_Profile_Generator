const Employee = require('.Employee');
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // brings in this information from the employee.js
        super (name, id, email);

        this. github - github;
    }
    getGithub() {
        return this.gitHub;
        }
        getRole() {
            return "Enigineer";
        }
    };

    // exports class
    module.exports = Engineer
