const Employee = require('./employee')

class Manager extends Employee{
    constructor(name, idNum, email, officeNum) {
        super(name, idNum, email)
        this.officeNum = officeNum; 
    }

    getOfficeNum() {
        return this.officeNum;
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager; 