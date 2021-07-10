const Employee = require('./employee')

class Intern extends Employee{
    constructor(name, idNum, email, school) {
        super(name, idNum, email)
        this.school = school;
    }


    getSchool() {
        return this.school
    }
    getRole() {
        return 'Intern'
    }

}

module.exports = Intern; 